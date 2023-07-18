import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder, private messageService: MessageService) { }
  uploadedFiles: any[] = [];
  commonForm: FormGroup | any;
  cities: City[] | any;
  selectedCountry: string | undefined;
  date: Date | undefined;
  categories: any[] = [
    { name: 'Male', key: 'M' },
    { name: 'Female', key: 'F' }
  ];
  ngOnInit(): void {
    this.commonForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      cities: ['', [Validators.required]],
      calender: ['', [Validators.required]]
    });
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }



}
