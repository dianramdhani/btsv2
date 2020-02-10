import { Airlines } from './airlines';

export class Flight {
    id: any;
    airlines: Airlines;
    flightNumber: string;
    cityFrom: string;
    cityDestination: string;
    boardingDateTime: string;
    airportFrom?: string;
    airportDestination?: string;
    departureTime?: string;
    arrivalTime?: string;
}