import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';
import { replace } from 'feather-icons';

import { FlightManagementService } from '@data/service/flight-management.service';
import { Airlines } from '@data/schema/airlines';
import { Flight } from '@data/schema/flight';
import { Baggage } from '@data/schema/baggage';
import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-advance-baggage-tracking',
  templateUrl: './advance-baggage-tracking.component.html',
  styleUrls: ['./advance-baggage-tracking.component.scss']
})
export class AdvanceBaggageTrackingComponent implements OnInit {
  selectedAirline: Airlines;
  flights: Flight[] = [];
  baggages: Baggage[] = [];
  flightSelected: Flight;
  baggageSelected: Baggage;
  baggageHistories: BaggageHistory[] = [];
  processColors = {
    'ON TIME': 'bg-success',
    'DELAY': 'bg-warning',
    'WRONG LOCATION': 'bg-danger'
  };
  @ViewChild(WizardComponent, { static: true }) wizard: WizardComponent;
  formTracking: FormGroup;

  constructor(
    private flightManagementService: FlightManagementService,
    private baggageTrackerService: BaggageTrackerService
  ) { }

  ngOnInit() {
    this.formTracking = new FormGroup({
      flightNumber: new FormControl('', Validators.required),
      airportFrom: new FormControl('', Validators.required),
      airportDestination: new FormControl('', Validators.required),
      minDepartureTime: new FormControl('', Validators.required),
      maxDepartureTime: new FormControl('', Validators.required),
      minArrivalTime: new FormControl('', Validators.required),
      maxArrivalTime: new FormControl('', Validators.required),
    });
    this.selectedAirline = this.flightManagementService.selectedAirline;
  }

  async search() {
    const params = this.formTracking.value;
    console.log(params);
    this.flights = (await this.flightManagementService.getFlightByParameter(this.selectedAirline.id, params).toPromise()).content;
    setTimeout(() => replace(), 50);
  }

  async selectFlight(flight: Flight, event: Event) {
    this.flightSelected = flight;
    this.baggages = (await this.flightManagementService.getBaggageByParameter(this.flightSelected.id).toPromise()).content;
    this.wizard.goToNextStep();
    setTimeout(() => replace(), 50);
  }

  async selectBaggage(baggage: Baggage, event: Event) {
    this.baggageSelected = baggage;
    this.baggageHistories = await this.baggageTrackerService.getBaggageHistoryByBaggageId(this.baggageSelected.id).toPromise();
    this.wizard.goToNextStep();
    console.log(this.baggageHistories);
  }
}