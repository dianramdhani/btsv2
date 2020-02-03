import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRfidScannerRoutingModule } from './config-rfid-scanner-routing.module';
import { ConfigRfidScannerComponent } from './page/config-rfid-scanner/config-rfid-scanner.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ConfigRfidScannerComponent],
  imports: [
    CommonModule,
    ConfigRfidScannerRoutingModule,
    SharedModule
  ]
})
export class ConfigRfidScannerModule { }
