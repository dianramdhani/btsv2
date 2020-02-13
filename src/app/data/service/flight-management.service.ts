import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Airlines } from '@data/schema/airlines';
import { Table } from '@data/schema/table';
import { Flight } from '@data/schema/flight';
import { Baggage } from '@data/schema/baggage';

@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {
  private url: string;
  private _selectedAirline: Airlines;
  private keySelectedAirline = 'selectedAirline';

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://apps.tritronik.com/baggage-tracker-service';
  }

  get selectedAirline() {
    return this._selectedAirline || JSON.parse(localStorage.getItem(this.keySelectedAirline));
  }

  set selectedAirline(airline: Airlines) {
    this._selectedAirline = airline;
    localStorage.setItem(this.keySelectedAirline, JSON.stringify(airline));
  }

  getAirlines() {
    return this.httpClient.get<Airlines[]>(`${this.url}/flight-management/airlines`);
  }

  getFlightByParameter(
    airlinesId: string | number, params?: {
      flightNumber?: string,
      airportFrom?: string,
      airportDestination?: string,
      minDepartureTime?: string,
      maxDepartureTime?: string,
      minArrivalTime?: string,
      maxArrivalTime?: string,
    }
  ) {
    console.log(params);
    const _params = new HttpParams()
      .set('flightNumber', params.flightNumber)
      .set('airportFrom', params.airportFrom)
      .set('airportDestination', params.airportDestination)
      .set('minDepartureTime', params.minDepartureTime)
      .set('maxDepartureTime', params.maxDepartureTime)
      .set('minArrivalTime', params.minArrivalTime)
      .set('maxArrivalTime', params.maxArrivalTime);
    return this.httpClient.get<Table<Flight>>(`${this.url}/flight-management/flight/${airlinesId}/param`, { params: _params });
  }

  getBaggageByParameter(flightId: string | number) {
    return this.httpClient.get<Table<Baggage>>(`${this.url}/flight-management/baggage/${flightId}/param`);
  }
}