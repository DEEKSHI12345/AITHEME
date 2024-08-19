import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateReportsModule } from './generate-reports.module';
import { GenerateReportsComponent } from './containers/generate-reports.component';

const routes: Routes = [
  {
    path:'',component:GenerateReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateReportsRoutingModule { }
