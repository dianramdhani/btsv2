import { Component, OnInit } from '@angular/core';
import { FlightManagementService } from '@data/service/flight-management.service';

@Component({
  selector: 'app-advance-baggage-tracking',
  templateUrl: './advance-baggage-tracking.component.html',
  styleUrls: ['./advance-baggage-tracking.component.scss']
})
export class AdvanceBaggageTrackingComponent implements OnInit {

  constructor(
    private flightManagementService: FlightManagementService
  ) { }

  ngOnInit() {
    console.log(this.flightManagementService.selectedAirline);
  }

}
