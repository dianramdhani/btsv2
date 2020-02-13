import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';
import { replace } from 'feather-icons';
import { Subscription, timer } from 'rxjs';

import { FlightManagementService } from '@data/service/flight-management.service';
import { Airlines } from '@data/schema/airlines';
import { Flight } from '@data/schema/flight';
import { Baggage } from '@data/schema/baggage';
import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-advance-baggage-tracking',
  templateUrl: './advance-baggage-tracking.component.html',
  styleUrls: ['./advance-baggage-tracking.component.scss']
})
export class AdvanceBaggageTrackingComponent implements OnInit, OnDestroy {
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
  timerSubscription: Subscription;

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

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  async search() {
    const params = this.formTracking.value;
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
    this.wizard.goToNextStep();

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(0, 5000)
      .pipe(
        tap(() => {
          this.baggageTrackerService.getBaggageHistoryByBaggageId(this.baggageSelected.id).subscribe(res => {
            this.baggageHistories = res;
            console.log(this.baggageHistories);
          });
        })
      ).subscribe();
  }
}