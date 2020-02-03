import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageTrackingRoutingModule } from './baggage-tracking-routing.module';
import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BaggageTrackingComponent],
  imports: [
    CommonModule,
    BaggageTrackingRoutingModule,
    SharedModule
  ]
})
export class BaggageTrackingModule { }
