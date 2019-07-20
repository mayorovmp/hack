import { Reading } from './Reading'
export class Counter{
    id: number;
    number: string;
    type: string;
    readings: Reading[];
    installDate: Date;
    startDate: Date;
    calibrationDate: Date;
}