import { Baggage } from './baggage';

export class BaggageTracking {
    id: any;
    baggage: Baggage;
    lastAirport: string;
    lastLocation: string;
    lastLocationTime: string;
    lastCorrectSequence: number;
    flightId: number;
}