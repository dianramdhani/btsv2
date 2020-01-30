import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageTrackingRoutingModule } from './baggage-tracking-routing.module';
import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';


@NgModule({
  declarations: [BaggageTrackingComponent],
  imports: [
    CommonModule,
    BaggageTrackingRoutingModule
  ]
})
export class BaggageTrackingModule { }
