import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import * as XLSX from 'xlsx';
import { window, windowWhen } from 'rxjs';

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
  selectedFileName: string | any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private appservice: AppService) { }
  uploadedFiles: any[] = [];
  commonForm: FormGroup | any;
  cities: City[] | any;
  selectedCountry: string | undefined;
  jsonData: Array<any> = []
  visible: boolean = false;
  allData:any;
  payloads:any;
  name:string='';
  email:string='';
  phoneNumber:string='';
  


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


  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    this.selectedFileName = this.selectedFile?.name || '';
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      this.jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('this.jsonDatathis.jsonData', this.jsonData)
      this.payloads = this.jsonData;
      console.log(this.payloads,"payload...................."); 
    };
    fileReader.readAsBinaryString(file);
  }
  insert() {
   this.payloads = this.payloads.map((e:any)=>({
    name:e.Name,
    email:e.Email,
    phoneNumber:e.Phone
   }))
  console.log(this.payloads,"bodyyyyyyyyyy");
    console.log("payload", this.payloads);
    this.appservice.insert(this.payloads).subscribe((data:any)=>{
      console.log(data,"dataaaaaaaa");
      this.allData=data;
      console.log(this.allData,"allllllllllll");
    })
    this.visible = false;
    this.selectedFile = null;
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
  showDialog() {
    this.visible = true;
  }
  cancelDialog() {
    this.visible = false;
    this.selectedFile = null;
  }




}
