import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/baggage-tracking',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: 'baggage-tracking', loadChildren: '@modules/baggage-tracking/baggage-tracking.module#BaggageTrackingModule' },
      { path: 'check-in', loadChildren: '@modules/check-in/check-in.module#CheckInModule' },
      { path: 'config-rfid-scanner', loadChildren: '@modules/config-rfid-scanner/config-rfid-scanner.module#ConfigRfidScannerModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
