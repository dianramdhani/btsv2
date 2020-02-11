import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';
import { timer, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-rfid-scanner-simulator',
  templateUrl: './rfid-scanner-simulator.component.html',
  styleUrls: ['./rfid-scanner-simulator.component.scss']
})
export class RfidScannerSimulatorComponent implements OnInit, OnDestroy {
  baggageHistories: BaggageHistory[];
  processColors = {
    'ON TIME': 'bg-success',
    'DELAY': 'bg-warning',
    'MISDIRECTION': 'bg-danger'
  };
  formHistory: FormGroup;
  timerSubscription: Subscription;

  constructor(
    private baggageTrackerService: BaggageTrackerService
  ) { }

  ngOnInit() {
    this.formHistory = new FormGroup({
      baggageId: new FormControl('', Validators.required)
    });
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
            });
        })
      ).subscribe();
  }
}