import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageScheduleComponent } from './page/baggage-schedule/baggage-schedule.component';


const routes: Routes = [
  { path: '', component: BaggageScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageScheduleRoutingModule { }
