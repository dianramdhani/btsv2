import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '@data/schema/flight';
import { BaggageSchedule } from '@data/schema/baggage-schedule';

@Injectable({
  providedIn: 'root'
})
export class BaggageScheduleService {
  url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://apps.tritronik.com/baggage-tracker-service';
  }

  getFlightAll() {
    return this.httpClient.get<Flight[]>(`${this.url}/baggage-schedule/flight`);
  }

  getBaggageScheduleByFlightId(flightId: string) {
    return this.httpClient.get<BaggageSchedule[]>(`${this.url}/baggage-schedule/schedule/${flightId}`);
  }
}
