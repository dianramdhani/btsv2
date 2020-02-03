import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { SuperAdminLayoutComponent } from './layout/super-admin-layout/super-admin-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'super-admin',
    component: SuperAdminLayoutComponent,
    children: [
      { path: 'baggage-tracking', loadChildren: '@modules/baggage-tracking/baggage-tracking.module#BaggageTrackingModule' },
      { path: 'check-in', loadChildren: '@modules/check-in/check-in.module#CheckInModule' },
      { path: 'config-rfid-scanner', loadChildren: '@modules/config-rfid-scanner/config-rfid-scanner.module#ConfigRfidScannerModule' }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
