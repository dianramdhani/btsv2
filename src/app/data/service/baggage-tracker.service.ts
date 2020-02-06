import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaggageHistory } from '@data/schema/baggage-history';

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
}