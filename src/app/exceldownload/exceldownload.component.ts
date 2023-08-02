import { Component } from '@angular/core';
import { AppService } from '../app.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-exceldownload',
  templateUrl: './exceldownload.component.html',
  styleUrls: ['./exceldownload.component.scss']
})
export class ExceldownloadComponent {
  date: Date | any;
  constructor(private appservice: AppService) {}
  table: any[] = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Jane', age: 25, email: 'jane@example.com' },
  ];
// service file function
  // exportToExcel(): void {
  //   this.appservice.exportToExcel(this.table, 'table_data');
  // }

exportToExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.table);
  const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  const data: Blob = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  });
  saveAs(data, 'table_data.xlsx');
}


 

}

 
