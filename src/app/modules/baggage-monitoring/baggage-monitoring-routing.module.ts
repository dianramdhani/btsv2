import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageMonitoringComponent } from './page/baggage-monitoring/baggage-monitoring.component';


const routes: Routes = [
  { path: '', component: BaggageMonitoringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageMonitoringRoutingModule { }
