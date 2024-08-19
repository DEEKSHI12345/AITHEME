import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateReportsRoutingModule } from './generate-reports-routing.module';
import { GenerateReportsComponent } from './containers/generate-reports.component';
import { SecureSharedModule } from '../secure-shared/secure-shared.module';


@NgModule({
  declarations: [
    GenerateReportsComponent
  ],
  imports: [
    CommonModule,
    GenerateReportsRoutingModule,
    SecureSharedModule

  ]
})
export class GenerateReportsModule { }
