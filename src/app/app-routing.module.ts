import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { ExceldownloadComponent } from './exceldownload/exceldownload.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';

const routes: Routes = [
  {path: "form", component:FormComponent},
  {path: "chart", component:D3ChartComponent},
  {path: "excel", component:ExceldownloadComponent},
  {path: "bulk", component:BulkUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
