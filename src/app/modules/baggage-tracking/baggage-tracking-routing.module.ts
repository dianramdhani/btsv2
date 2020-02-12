import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaggageTrackingComponent } from './page/baggage-tracking/baggage-tracking.component';
import { ContainerComponent } from './page/container/container.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', component: BaggageTrackingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageTrackingRoutingModule { }
