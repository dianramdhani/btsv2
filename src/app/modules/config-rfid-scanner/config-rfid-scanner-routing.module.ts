import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigRfidScannerComponent } from './page/config-rfid-scanner/config-rfid-scanner.component';


const routes: Routes = [
  { path: '', component: ConfigRfidScannerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRfidScannerRoutingModule { }
