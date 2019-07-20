export class Reading{
    id: number;
    value: number;//Показание
    source: string;//Источник(система город, лк и тд)
    date: Date;//Дата снятия показания
    settlementDate: Date;//Расчетная дата(Дата учета показания)
}