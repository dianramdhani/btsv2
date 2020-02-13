import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaggageHistory } from '@data/schema/baggage-history';
import { SummaryTracking } from '@data/schema/summary-tracking';

@Injectable({
  providedIn: 'root'
})
export class BaggageTrackerService {
  url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://apps.tritronik.com/baggage-tracker-service';
  }

  getBaggageHistoryByBaggageId(baggageId: string) {
    return this.httpClient.get<BaggageHistory[]>(`${this.url}/baggage-tracker/baggage/history/id/${baggageId}`);
  }

  getDistinctBaggageId() {
    return this.httpClient.get<string[]>(`${this.url}/baggage-tracker/baggage/id/distinct`);
  }

  getBaggageSummaryTracking(airlinesId: string | number) {
    return this.httpClient.get<SummaryTracking[]>(`${this.url}/baggage-tracker/baggageSummaryTracking/${airlinesId}`);
  }
}