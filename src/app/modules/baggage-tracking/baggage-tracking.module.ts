import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageTrackingRoutingModule } from './baggage-tracking-routing.module';
import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './page/container/container.component';
import { AdvanceBaggageTrackingComponent } from './page/advance-baggage-tracking/advance-baggage-tracking.component';
import { BaggageTrackingPassengerComponent } from './page/baggage-tracking-passenger/baggage-tracking-passenger.component';

@NgModule({
  declarations: [BaggageTrackingComponent, ContainerComponent, AdvanceBaggageTrackingComponent, BaggageTrackingPassengerComponent],
  imports: [
    CommonModule,
    BaggageTrackingRoutingModule,
    SharedModule
  ]
})
export class BaggageTrackingModule { }
