import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaggageScheduleRoutingModule } from './baggage-schedule-routing.module';
import { BaggageScheduleComponent } from './page/baggage-schedule/baggage-schedule.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [BaggageScheduleComponent],
  imports: [
    CommonModule,
    BaggageScheduleRoutingModule,
    SharedModule
  ]
})
export class BaggageScheduleModule { }
