import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRfidScannerRoutingModule } from './config-rfid-scanner-routing.module';
import { ConfigRfidScannerComponent } from './page/config-rfid-scanner/config-rfid-scanner.component';
import { SharedModule } from '@shared/shared.module';
import { ModalAddRfidScannerComponent } from './component/modal-add-rfid-scanner/modal-add-rfid-scanner.component';


@NgModule({
  declarations: [ConfigRfidScannerComponent, ModalAddRfidScannerComponent],
  imports: [
    CommonModule,
    ConfigRfidScannerRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ModalAddRfidScannerComponent
  ]
})
export class ConfigRfidScannerModule { }
