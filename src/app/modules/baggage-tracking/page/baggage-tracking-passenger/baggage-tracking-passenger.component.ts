import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timer, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';

@Component({
  selector: 'app-baggage-tracking-passenger',
  templateUrl: './baggage-tracking-passenger.component.html',
  styleUrls: ['./baggage-tracking-passenger.component.scss']
})
export class BaggageTrackingPassengerComponent implements OnInit, OnDestroy {
  baggageHistories: BaggageHistory[] = [];
  processColors = {
    'ON TIME': 'bg-success',
    'DELAY': 'bg-warning',
    'WRONG LOCATION': 'bg-danger'
  };
  formHistory: FormGroup;
  timerSubscription: Subscription;
  baggageIds: string[];
  showNotFound = false;

  constructor(
    private baggageTrackerService: BaggageTrackerService
  ) { }

  async ngOnInit() {
    this.formHistory = new FormGroup({
      baggageId: new FormControl('', Validators.required)
    });

    this.baggageIds = await this.baggageTrackerService.getDistinctBaggageId().toPromise();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  checkHistory() {
    const { baggageId } = this.formHistory.value;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = timer(0, 5000)
      .pipe(
        tap(() => {
          this.baggageTrackerService.getBaggageHistoryByBaggageId(baggageId)
            .subscribe(res => {
              console.log(res);
              this.baggageHistories = res;
              if (this.baggageHistories.length) {
                this.showNotFound = false;
              } else {
                this.showNotFound = true;
              }
            });
        })
      ).subscribe();
  }
}