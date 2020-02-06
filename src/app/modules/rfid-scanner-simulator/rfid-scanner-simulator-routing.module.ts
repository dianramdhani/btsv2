import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfidScannerSimulatorComponent } from './page/rfid-scanner-simulator/rfid-scanner-simulator.component';


const routes: Routes = [
  { path: '', component: RfidScannerSimulatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfidScannerSimulatorRoutingModule { }
