import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { errMsg } from './isErr';
export const view = (value, min, max) =>
{
    const valueAmount = Number(value.length);
// 1
    if (valueAmount === min) {
        console.log(`1`);
    }
    // 2-10
    if (valueAmount > min &&
        valueAmount <= max)
    {
        value.forEach(element => {
        console.log(element.name.official);
        // console.log(element.capital[0]);
        // console.log(element.population);
        // console.log(element.flags.svg);
    });
    }
    // +10
    if (valueAmount > max) {
        Notify.info(errMsg.tooMuch);
        return;
    }
};