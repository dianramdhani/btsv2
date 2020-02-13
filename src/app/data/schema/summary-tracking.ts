import { Flight } from './flight';
import { Status } from './status';

export class SummaryTracking {
    flight: Flight;
    totalBaggage: number;
    checkinBaggage: Status;
    apronBaggage: Status;
    transferBaggage: Status;
    claimBaggage: Status
}