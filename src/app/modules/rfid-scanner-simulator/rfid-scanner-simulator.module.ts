import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfidScannerSimulatorRoutingModule } from './rfid-scanner-simulator-routing.module';
import { RfidScannerSimulatorComponent } from './page/rfid-scanner-simulator/rfid-scanner-simulator.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [RfidScannerSimulatorComponent],
  imports: [
    CommonModule,
    RfidScannerSimulatorRoutingModule,
    SharedModule
  ]
})
export class RfidScannerSimulatorModule { }
