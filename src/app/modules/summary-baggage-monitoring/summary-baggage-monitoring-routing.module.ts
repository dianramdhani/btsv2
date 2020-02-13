import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryBaggageMonitoringComponent } from './page/summary-baggage-monitoring/summary-baggage-monitoring.component';


const routes: Routes = [
  { path: '', component: SummaryBaggageMonitoringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryBaggageMonitoringRoutingModule { }
