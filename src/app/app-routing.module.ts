import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { D3ChartComponent } from './d3-chart/d3-chart.component';

const routes: Routes = [
  {path: "form", component:FormComponent},
  {path: "chart", component:D3ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
