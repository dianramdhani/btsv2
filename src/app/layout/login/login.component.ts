import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlightManagementService } from '@data/service/flight-management.service';
import { Airlines } from '@data/schema/airlines';
import { WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = [
    // { label: 'Super Admin', value: 'admin' },
    { label: 'Admin Airline', value: 'airline' },
    { label: 'Passenger', value: 'passenger' },
  ];
  airlines: Airlines[] = [];
  selectedRole: string = '';
  selectedAirline: Airlines = null;
  @ViewChild(WizardComponent, { static: true }) wizard: WizardComponent;

  constructor(
    private router: Router,
    private flightManagementService: FlightManagementService
  ) { }

  ngOnInit() {
  }

  async roleChange() {
    switch (this.selectedRole) {
      // case 'admin':
      //   this.router.navigate(['/super-admin/baggage-tracking/simple-baggage-tracking']);
      //   break;

      case 'passenger':
        this.router.navigate(['/passenger/baggage-tracking-passenger']);
        break;

      case 'airline':
        this.airlines = await this.flightManagementService.getAirlines().toPromise();
        this.wizard.goToNextStep();
        break;
    }
  }

  airlinesChange() {
    this.flightManagementService.selectedAirline = this.selectedAirline;
    this.router.navigate(['/airline/baggage-tracking/advance-baggage-tracking']);
  }
}
