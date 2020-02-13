import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryBaggageMonitoringRoutingModule } from './summary-baggage-monitoring-routing.module';
import { SummaryBaggageMonitoringComponent } from './page/summary-baggage-monitoring/summary-baggage-monitoring.component';


@NgModule({
  declarations: [SummaryBaggageMonitoringComponent],
  imports: [
    CommonModule,
    SummaryBaggageMonitoringRoutingModule
  ]
})
export class SummaryBaggageMonitoringModule { }
