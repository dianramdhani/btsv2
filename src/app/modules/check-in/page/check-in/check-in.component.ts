import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CheckinService } from '@data/service/checkin.service';
import { PassangerBaggage } from '@data/schema/passenger-baggage';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  formCheckIn: FormGroup;
  showNextForm = false;
  passangerIds: string[];
  lastPassengerBaggages: PassangerBaggage[] = [];

  constructor(
    private checkInService: CheckinService,
  ) { }

  async ngOnInit() {
    this.formCheckIn = new FormGroup({
      passengerId: new FormControl('', Validators.required),
      airport: new FormControl({ value: '', disabled: true }, Validators.required),
      location: new FormControl({ value: 'CHECK IN', disabled: true }, Validators.required),
      locationTime: new FormControl(''),
      baggages: new FormArray([this.createBaggage()], Validators.required),
    });
    this.formCheckIn.get('passengerId').valueChanges
      .subscribe(() => {
        this.showNextForm = false;
        this.checkPassanger();
      });

    this.passangerIds = await this.checkInService.getDistinctPassengerId().toPromise();
    console.log(this.passangerIds);
  }

  private createBaggage() {
    return new FormGroup({
      weight: new FormControl(null, Validators.required),
      baggageId: new FormControl('', Validators.required),
      baggageTrackingId: new FormControl({ value: '', disabled: true }, Validators.required),
      trackingDeviceId: new FormControl({ value: '', disabled: true }, Validators.required)
    });
  }

  addBaggage() {
    const baggages = this.formCheckIn.get('baggages') as FormArray;
    baggages.push(this.createBaggage());
  }

  removeBaggage(index: number, event: Event = null) {
    const baggages = this.formCheckIn.get('baggages') as FormArray;
    baggages.removeAt(index);
  }

  async checkPassanger() {
    const { passengerId } = this.formCheckIn.getRawValue(),
      passenger = await this.checkInService.getPassengerById(passengerId).toPromise();
    this.formCheckIn.patchValue({
      airport: passenger.flight.airportFrom
    });
    this.showNextForm = true;

    this.lastPassengerBaggages = await this.checkInService.getPassengerBaggageInfo(passengerId).toPromise();
    console.log(this.lastPassengerBaggages);
  }

  async generateCode(index: number, event: Event) {
    const { airport } = this.formCheckIn.getRawValue(),
      code = await this.checkInService.generateCode('CHECK IN', airport).toPromise(),
      baggages = this.formCheckIn.get('baggages') as FormArray;
    baggages.at(index).patchValue({
      baggageTrackingId: code.baggageTagId,
      trackingDeviceId: code.trackingDevice.id
    });
  }

  async submit() {
    this.formCheckIn.patchValue({
      locationTime: (new Date()).toISOString()
    });
    const {
      passengerId,
      airport,
      location,
      locationTime,
      baggages
    } = this.formCheckIn.getRawValue();

    for (const index in baggages) {
      const res = await this.checkInService.baggageCheckIn(
        passengerId,
        airport,
        baggages[index].baggageId,
        baggages[index].baggageTrackingId,
        location,
        locationTime,
        baggages[index].trackingDeviceId,
        baggages[index].weight
      ).toPromise();
    }

    alert('Check In Success');
    this.formCheckIn.reset();
  }
}