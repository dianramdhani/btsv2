import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BaggageTrackerService } from '@data/service/baggage-tracker.service';
import { BaggageHistory } from '@data/schema/baggage-history';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-rfid-scanner-simulator',
  templateUrl: './rfid-scanner-simulator.component.html',
  styleUrls: ['./rfid-scanner-simulator.component.scss']
})
export class RfidScannerSimulatorComponent implements OnInit {
  baggageHistories: BaggageHistory[];
  processColors = {
    'ON TIME': 'bg-success',
    'DELAY': 'bg-warning',
    'MISDIRECTION': 'bg-danger'
  };
  formHistory: FormGroup;

  constructor(
    private baggageTrackerService: BaggageTrackerService
  ) { }

  ngOnInit() {
    this.formHistory = new FormGroup({
      baggageId: new FormControl('', Validators.required)
    });
  }

  async checkHistory() {
    const { baggageId } = this.formHistory.value;
    timer(0, 10000)
      .pipe(
        tap(async () => {
          this.baggageHistories = await this.baggageTrackerService.getBaggageHistoryByBaggageId(baggageId).toPromise();
          console.log(this.baggageHistories);
        })
      ).subscribe();
  }
}