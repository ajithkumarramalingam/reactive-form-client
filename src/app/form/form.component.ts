import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

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
  selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null | undefined;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private http: HttpClient,
    private appservice: AppService) { }
  uploadedFiles: any[] = [];
  commonForm: FormGroup | any;
  cities: City[] | any;
  selectedCountry: string | undefined;
  date: Date | undefined;
  name: string | any;
  email: string | any;
  phoneNumber: string | any;
  allData: any;
  ngOnInit(): void {
    this.commonForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      city: ['', [Validators.required]],
      food: ['', [Validators.required]],
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
  categories: any[] = [
    { name: 'Male', key: 'M' },
    { name: 'Female', key: 'F' }
  ];
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedFileUrl = e.target?.result;
      console.log('this.selectedFileUrl', this.selectedFileUrl)
    };
    reader.readAsDataURL(file);
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('your-upload-endpoint', formData).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('File upload failed:', error);
        }
      );
    }
    else {
      console.log('No file selected.');
    }
  }




}
