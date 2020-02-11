import { Flight } from './flight';

export class BaggageSchedule {
    id: any;
    location: string;
    airport: string;
    city: string;
    estimationTime: string;
    sequence: number;
    flight: Flight;
}