import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { DataModule } from '@data/data.module';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './layout/login/login.component';
import { SuperAdminLayoutComponent } from './layout/super-admin-layout/super-admin-layout.component';
import { PassangerLayoutComponent } from './layout/passanger-layout/passanger-layout.component';
import { AirlinesLayoutComponent } from './layout/airlines-layout/airlines-layout.component';
import { LibraryLoaderService } from '@shared/service/library-loader.service';
import { FlightManagementService } from '@data/service/flight-management.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SuperAdminLayoutComponent,
    PassangerLayoutComponent,
    AirlinesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    SharedModule
  ],
  providers: [
    LibraryLoaderService,
    FlightManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
