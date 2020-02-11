import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BaggageScheduleService } from '@data/service/baggage-schedule.service';
import { Flight } from '@data/schema/flight';
import { FormGroup, FormControl } from '@angular/forms';
import { BaggageSchedule } from '@data/schema/baggage-schedule';

@Component({
  selector: 'app-baggage-schedule',
  templateUrl: './baggage-schedule.component.html',
  styleUrls: ['./baggage-schedule.component.scss']
})
export class BaggageScheduleComponent implements OnInit, OnDestroy {
  flights: Flight[];
  flightSelected: Flight;
  baggageSchedules: BaggageSchedule[];
  timerSubscription: Subscription;

  constructor(
    private baggageScheduleService: BaggageScheduleService
  ) { }

  async ngOnInit() {
    this.flights = await this.baggageScheduleService.getFlightAll().toPromise();
    console.log(this.flights);
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  getBaggageSchedule(event: Event) {
    console.log(this.flightSelected);
    if (this.flightSelected) {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      this.timerSubscription = timer(0, 5000)
        .pipe(
          tap(() => {
            this.baggageScheduleService.getBaggageScheduleByFlightId(this.flightSelected.id)
              .subscribe(res => {
                this.baggageSchedules = res;
                console.log(this.baggageSchedules);
              });
          })
        ).subscribe();
    }
  }
}