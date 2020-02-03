import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CheckInComponent } from './page/check-in/check-in.component';


@NgModule({
  declarations: [CheckInComponent],
  imports: [
    CommonModule,
    CheckInRoutingModule,
    SharedModule
  ]
})
export class CheckInModule { }
