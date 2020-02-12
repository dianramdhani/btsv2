import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageTrackingRoutingModule } from './baggage-tracking-routing.module';
import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './page/container/container.component';

@NgModule({
  declarations: [BaggageTrackingComponent, ContainerComponent],
  imports: [
    CommonModule,
    BaggageTrackingRoutingModule,
    SharedModule
  ]
})
export class BaggageTrackingModule { }
