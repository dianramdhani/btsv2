import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { FlightManagementService } from '@data/service/flight-management.service';
import { Airlines } from '@data/schema/airlines';
import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { SummaryTracking } from '@data/schema/summary-tracking';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-summary-baggage-monitoring',
  templateUrl: './summary-baggage-monitoring.component.html',
  styleUrls: ['./summary-baggage-monitoring.component.scss']
})
export class SummaryBaggageMonitoringComponent implements OnInit, OnDestroy {
  selectedAirline: Airlines;
  baggageSummaryTracking: SummaryTracking[] = [];
  timerSubscription: Subscription;

  constructor(
    private flightManagementService: FlightManagementService,
    private baggageTrackerService: BaggageTrackerService
  ) { }

  async ngOnInit() {
    this.selectedAirline = this.flightManagementService.selectedAirline;

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(0, 5000)
      .pipe(
        tap(() => {
          this.baggageTrackerService.getBaggageSummaryTracking(this.selectedAirline.id).subscribe(res => {
            this.baggageSummaryTracking = res;
            console.log(this.baggageSummaryTracking);
          });
        })
      ).subscribe();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}