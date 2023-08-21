import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3000/reactive/';
  getProductsMini: any;
  constructor(private http: HttpClient) { }
  insert (payloads:any) {
    return this.http.post(this.url+ 'insert', payloads);
  }
// this is maintain for service file
  // exportToExcel(tableData: any[], fileName: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData);
  //   const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveExcelFile(excelBuffer, fileName);
  // }

  // private saveExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //   saveAs(data, `${fileName}.xlsx`);
  // }
}
