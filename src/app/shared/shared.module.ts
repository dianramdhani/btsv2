import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataTablesModule,
    NgbModule
  ],
  exports: [
    ArchwizardModule,
    DataTablesModule,
    NgbModule
  ]
})
export class SharedModule { }
