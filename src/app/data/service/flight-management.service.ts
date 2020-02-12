import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airlines } from '@data/schema/airlines';

@Injectable({
  providedIn: 'root'
})
export class FlightManagementService {
  private url: string;
  private _selectedAirline: Airlines;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://apps.tritronik.com/baggage-tracker-service';
  }

  getAirlines() {
    return this.httpClient.get<Airlines[]>(`${this.url}/flight-management/airlines`);
  }

  get selectedAirline() {
    return this._selectedAirline;
  }

  set selectedAirline(airline: Airlines) {
    this._selectedAirline = airline;
  }
}