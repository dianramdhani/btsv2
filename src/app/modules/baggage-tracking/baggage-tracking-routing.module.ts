import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';


const routes: Routes = [
  { path: '', component: BaggageTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageTrackingRoutingModule { }
