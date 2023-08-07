import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import * as XLSX from 'xlsx';

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
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private appservice: AppService) { }
  selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null | undefined;
  selectedFileName: string | any;
  data: any;
  options: any;
  uploadedFiles: any[] = [];
  commonForm: FormGroup | any;
  cities: City[] | any;
  selectedCountry: string | undefined;
  jsonData: Array<any> = [];
  visible: boolean = false;
  allData: any;
  payloads: any;
  name: string='';
  email: string='';
  phoneNumber: string='';
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    
    this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                borderColor: documentStyle.getPropertyValue('--yellow-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--yellow-400'),
                pointBorderColor: documentStyle.getPropertyValue('--yellow-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--yellow-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                data: [28, 48, 40, 19, 96, 27, 50]
            },
            {
              label: 'My Third dataset',
              borderColor: documentStyle.getPropertyValue('--red-400'),
              pointBackgroundColor: documentStyle.getPropertyValue('--red-400'),
              pointBorderColor: documentStyle.getPropertyValue('--red-400'),
              pointHoverBackgroundColor: textColor,
              pointHoverBorderColor: documentStyle.getPropertyValue('--red-400'),
              data: [10, 38, 70, 89, 16, 27, 100]
          }
        ]
    };
    
    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                },
                pointLabels: {
                    color: textColorSecondary
                }
            }
        }
    };
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
  showDialog() {
    this.visible = true;
  }
  cancelDialog() {
    this.visible = false;
    this.selectedFile = null;
  }

onFileChange(event: any): void {
  const file = event.target.files[0];
  this.readFile(file);
}

onFileDrop(event: any): void {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  this.readFile(file);
}

onDragOver(event: any): void {
  event.preventDefault();
}

readFile(file: File): void {
  console.log("file...............", file);
  this.selectedFile = file;
  this.selectedFileName = this.selectedFile?.name || '';
  const fileReader = new FileReader();
  fileReader.onload = (e: any) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: 'binary' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    this.jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    this.payloads = this.jsonData;
    console.log(this.payloads, "-------------------------");
  };
  fileReader.readAsBinaryString(file);
}

  // onFileChange(event: any): void {
  //   this.selectedFile = event.target.files[0] as File;
  //   this.selectedFileName = this.selectedFile?.name || '';
  //   const file = event.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onload = (e: any) => {
  //     const data = e.target.result;
  //     const workbook = XLSX.read(data, { type: 'binary' });
  //     const firstSheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[firstSheetName];
  //     this.jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  //     console.log('this.jsonDatathis.jsonData', this.jsonData)
  //     this.payloads = this.jsonData;
  //     console.log(this.payloads,"payload....................");

  //   };
  //   fileReader.readAsBinaryString(file);
  // }
  }
