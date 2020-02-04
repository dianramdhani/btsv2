import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchwizardModule } from 'angular-archwizard';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';

import { BaggageTrackingCpComponent } from './component/baggage-tracking-cp/baggage-tracking-cp.component';



@NgModule({
  declarations: [BaggageTrackingCpComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    NgbModule,
    ArchwizardModule
  ],
  exports: [
    ArchwizardModule,
    DataTablesModule,
    NgbModule,
    ReactiveFormsModule,
    Select2Module,

    BaggageTrackingCpComponent
  ]
})
export class SharedModule { }
