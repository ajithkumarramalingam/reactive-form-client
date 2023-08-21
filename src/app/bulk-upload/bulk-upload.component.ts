import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss']
})
export class BulkUploadComponent {
  // constructor(private el: ElementRef) { }

  // @HostListener('input', ['$event'])
  // onInput(event: any) {
  //   const input = event.target;
  //   const value = input.value.replace(/\D/g, '');

  //   if (value.length > 2) {
  //     const hours = value.slice(0, 2);
  //     const minutes = value.slice(2, 4);
  //     input.value = `${hours}:${minutes}`;
  //   } else {
  //     input.value = value;
  //   }
  // }
  // timeValue: string = '';

  // formatTime() {
  //   this.timeValue = this.timeValue.replace(/\D/g, '');
  //   if (this.timeValue.length > 2) {
  //     const hours = this.timeValue.slice(0, 2);
  //     const minutes = this.timeValue.slice(2, 4);
  //     this.timeValue = `${hours}:${minutes}`;
  //   }
  // }

//   import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-your-component',
//   templateUrl: './your-component.component.html',
//   styleUrls: ['./your-component.component.css']
// })
// export class YourComponent {
  shiftForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.shiftForm = this.formBuilder.group({
      startTime: null 
    });
  }

  formatTime(event: any) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
      const hours = value.slice(0, 2);
      const minutes = value.slice(2, 4);
      input.value = `${hours}:${minutes}`;
    }
  }
// }
// proper formate and primeng
// formatTime(event: any) {
//   const input = event.target;
//   const value = input.value.replace(/[^0-9APMapm]/g, '');
//   if (value.length === 1 && (value === 'A' || value === 'a')) {
//     input.value = 'A';
//   } else if (value.length === 1 && (value === 'P' || value === 'p')) {
//     input.value = 'P';
//   } else if (value.length > 1) {
//     const formattedValue = this.formatAMPM(value);
//     input.value = formattedValue;
//   }
// }
// formatAMPM(value: string): string {
//   let formattedValue = value.replace(/[^0-9APMapm]/g, '');
//   if (formattedValue.length > 2) {
//     formattedValue = formattedValue.substring(0, 2) + ':' + formattedValue.substring(2);
//   }
//   if (formattedValue.length > 5) {
//     formattedValue = formattedValue.substring(0, 5) + ' ' + formattedValue.substring(5);
//   }
//   formattedValue = formattedValue.replace(/am/g, 'AM').replace(/pm/g, 'PM');
//   return formattedValue;
// }
//only time will be show
// formatTime(event: any) {
//   const input = event.target;
//   const value = input.value.replace(/[^0-9APMapm]/g, '');

//   if (value.length > 2) {
//     const hours = value.slice(0, 2);
//     const minutes = value.slice(2, 4);
//     input.value = `${hours}:${minutes}`;
//   }
// }




}
  


