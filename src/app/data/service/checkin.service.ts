import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Passanger } from '@data/schema/passanger';
import { Code } from '@data/schema/code';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://apps.tritronik.com/baggage-tracker-service';
  }

  baggageCheckIn(
    passengerId: string,
    airport: string,
    baggageId: string,
    baggageTrackingId: string,
    location: string,
    locationTime: string,
    trackingDeviceId: number,
    weight: number
  ) {
    const params = JSON.stringify([
      {
        airport,
        baggageId,
        baggageTrackingId,
        location,
        locationTime,
        trackingDeviceId,
        weight
      }
    ]),
      headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
    return this.httpClient.post(`${this.url}/checkin/checkin/${passengerId}`, params, { headers });
  }

  getPassengerById(passengerId: string) {
    return this.httpClient.get<Passanger>(`${this.url}/checkin/checkin/passenger/${passengerId}`);
  }

  generateCode(location: string, airport: string) {
    return this.httpClient.get<Code>(`${this.url}/checkin/code/new/${location}/${airport}`);
  }

  getDistinctPassengerId() {
    return this.httpClient.get<string[]>(`${this.url}/checkin/checkin/passenger/id/distinct`);
  }
}
