import { Component, OnInit } from '@angular/core';

import { FlightManagementService } from '@data/service/flight-management.service';
import { Airlines } from '@data/schema/airlines';
import { Flight } from '@data/schema/flight';
import { Baggage } from '@data/schema/baggage';
import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';

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
  baggageHistories: BaggageHistory[];
  processColors = {
    'ON TIME': 'bg-success',
    'DELAY': 'bg-warning',
    'WRONG LOCATION': 'bg-danger'
  };

  constructor(
    private flightManagementService: FlightManagementService,
    private baggageTrackerService: BaggageTrackerService
  ) { }

  async ngOnInit() {
    this.selectedAirline = this.flightManagementService.selectedAirline;
    this.flights = (await this.flightManagementService.getFlightByParameter(this.selectedAirline.id).toPromise()).content;
  }

  async selectFlight(flight: Flight, event: Event) {
    this.flightSelected = flight;
    this.baggages = (await this.flightManagementService.getBaggageByParameter(this.flightSelected.id).toPromise()).content;
  }

  async selectBaggage(baggage: Baggage, event: Event) {
    this.baggageSelected = baggage;
    this.baggageHistories = await this.baggageTrackerService.getBaggageHistoryByBaggageId(this.baggageSelected.id).toPromise();
    console.log(this.baggageHistories);
  }
}