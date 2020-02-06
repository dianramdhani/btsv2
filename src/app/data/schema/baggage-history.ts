import { BaggageTracking } from './baggage-tracking';
import { TrackingDevice } from './tracking-device';

export class BaggageHistory {
    id: any;
    baggageTracking: BaggageTracking;
    airport: string;
    location: string;
    locationTime: string;
    processStatus: string;
    status: 'ON TIME' | 'DELAY' | 'MISDIRECTION';
    note: string;
    trackingDevice: TrackingDevice;
}