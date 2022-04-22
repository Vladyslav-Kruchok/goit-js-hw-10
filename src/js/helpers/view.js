import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { errMsg } from './isErr';
import { createCountryList, createSingleCountry} from './markup'


export const view = (ref, value, min, max) =>
{
    const valueAmount = Number(value.length);
    ref.ulCountryList.innerHTML = '';
    // 1
    if (valueAmount === min)
    {
        //render murkup
        ref.divCountryInfo.insertAdjacentHTML('beforeend', createSingleCountry(value));
    }
    // 2-10
    if (valueAmount > min &&
        valueAmount <= max)
    {
        //render murkup
        ref.ulCountryList.insertAdjacentHTML('beforeend', createCountryList(value));
    }
    // +10
    if (valueAmount > max)
    {
        Notify.info(errMsg.tooMuch);
        return;
    }
};