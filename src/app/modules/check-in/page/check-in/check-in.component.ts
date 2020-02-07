import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckinService } from '@data/service/checkin.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  formCheckIn: FormGroup;
  showNextForm = false;

  constructor(
    private checkInService: CheckinService
  ) { }

  ngOnInit() {
    this.formCheckIn = new FormGroup({
      passengerId: new FormControl('', Validators.required),
      airport: new FormControl({ value: '', disabled: true }, Validators.required),
      baggageId: new FormControl('tes3', Validators.required),
      baggageTrackingId: new FormControl('tes4', Validators.required),
      location: new FormControl({ value: 'CHECK IN', disabled: true }, Validators.required),
      locationTime: new FormControl(''),
      trackingDeviceId: new FormControl('99', Validators.required),
      weight: new FormControl('99', Validators.required),
    });

    this.formCheckIn.get('passengerId').valueChanges.subscribe(() => this.showNextForm = false);
  }

  async checkPassanger() {
    const { passengerId } = this.formCheckIn.value,
      passenger = await this.checkInService.getPassengerById(passengerId).toPromise(),
      code = await this.checkInService.generateCode('CHECK IN', passenger.flight.airportFrom).toPromise();

    this.formCheckIn.patchValue({
      airport: passenger.flight.airportFrom,
      baggageId: code.baggageBarcodeId,
      baggageTrackingId: code.baggageTagId,
      trackingDeviceId: code.trackingDevice.id
    });

    this.showNextForm = true;
  }

  async submit() {
    this.formCheckIn.patchValue({
      locationTime: (new Date()).toISOString()
    });
    const {
      passengerId,
      airport,
      baggageId,
      baggageTrackingId,
      location,
      locationTime,
      trackingDeviceId,
      weight
    } = this.formCheckIn.value;
    const res = await this.checkInService.baggageCheckIn(
      passengerId,
      airport,
      baggageId,
      baggageTrackingId,
      location,
      locationTime,
      trackingDeviceId,
      weight
    ).toPromise();
    console.log(res);
  }
}