import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getFlightByParameter(airlinesId: string | number) {
    return this.httpClient.get<Table<Flight>>(`${this.url}/flight-management/flight/${airlinesId}/param`);
  }

  getBaggageByParameter(flightId: string | number) {
    return this.httpClient.get<Table<Baggage>>(`${this.url}/flight-management/baggage/${flightId}/param`);
  }
}