import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckInComponent } from './page/check-in/check-in.component';


const routes: Routes = [
  { path: '', component: CheckInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
