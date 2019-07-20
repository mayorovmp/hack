import { Counter } from './Counter'
import { Reading } from './Reading'
export const COUNTERS: Counter[] = [
    {
        id: 1, number: 'a1234658', type: 'Электр день',
        calibrationDate: new Date(new Date().getTime() + 100*3 * (1000 * 60 * 60 * 24)),
        installDate: new Date(new Date().getTime() - 100 * (1000 * 60 * 60 * 24)),
        startDate: new Date(),
        readings: [
            {
                id: 1,
                date: new Date(),
                settlementDate: new Date(),
                source: "Личный кабинет",
                value: 100.1 + 10
            },
            {
                id: 2,
                date: new Date(new Date().getTime() + 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + 2 * 30 * (1000 * 60 * 60 * 24)),
                source: "Личный кабинет",
                value: 100.1 + 2 * 10
            },
            {
                id: 3,
                date: new Date(new Date().getTime() + 3 * 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + (3 * 30 + 1) * (1000 * 60 * 60 * 24)),
                source: "Система город",
                value: 100.1 + 3 * 10
            }
        ]
    },
    {
        id: 2, number: '931о32', type: 'Электр ночь',
        calibrationDate: new Date(new Date().getTime() + 300*3 * (1000 * 60 * 60 * 24)),
        installDate: new Date(new Date().getTime() - 300 * (1000 * 60 * 60 * 24)),
        startDate: new Date(),
        readings: [
            {
                id: 2,
                date: new Date(new Date().getTime() + 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + 2 * 30 * (1000 * 60 * 60 * 24)),
                source: "Личный кабинет",
                value: 100.1 + 2 * 10
            },
            {
                id: 3,
                date: new Date(new Date().getTime() + 3 * 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + (3 * 30 + 1) * (1000 * 60 * 60 * 24)),
                source: "Система город",
                value: 100.1 + 3 * 10
            },
            {
                id: 2,
                date: new Date(new Date().getTime() + 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + 2 * 30 * (1000 * 60 * 60 * 24)),
                source: "Личный кабинет",
                value: 140.1 + 2 * 10
            },
            {
                id: 3,
                date: new Date(new Date().getTime() + 3 * 30 * (1000 * 60 * 60 * 24)),
                settlementDate: new Date(new Date().getTime() + (3 * 30 + 1) * (1000 * 60 * 60 * 24)),
                source: "Система город",
                value: 160.1 + 3 * 10
            }]
    },
    {
        id: 3, number: '32762', type: 'ХВС',
        calibrationDate: new Date(),
        startDate: new Date(),
        installDate: new Date(), readings: []
    }
];