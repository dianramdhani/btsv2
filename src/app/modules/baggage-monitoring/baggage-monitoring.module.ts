import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageMonitoringRoutingModule } from './baggage-monitoring-routing.module';
import { BaggageMonitoringComponent } from './page/baggage-monitoring/baggage-monitoring.component';


@NgModule({
  declarations: [BaggageMonitoringComponent],
  imports: [
    CommonModule,
    BaggageMonitoringRoutingModule
  ]
})
export class BaggageMonitoringModule { }
