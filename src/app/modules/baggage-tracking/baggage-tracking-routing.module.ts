import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';
import { ContainerComponent } from './page/container/container.component';
import { AdvanceBaggageTrackingComponent } from './page/advance-baggage-tracking/advance-baggage-tracking.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'simple-baggage-tracking',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'simple-baggage-tracking', component: BaggageTrackingComponent },
      { path: 'advance-baggage-tracking', component: AdvanceBaggageTrackingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageTrackingRoutingModule { }
