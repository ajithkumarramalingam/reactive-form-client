import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { AppService } from './app.service';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ExceldownloadComponent } from './exceldownload/exceldownload.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    D3ChartComponent,
    ExceldownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    ChartModule,
    OrganizationChartModule,
    TableModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
