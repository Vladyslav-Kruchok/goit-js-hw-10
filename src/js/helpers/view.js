import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { errMsg } from './isErr';
import { createCountryList, createSingleCountry} from './markup'

const resetHTML = (ref) =>
{
    ref.divCountryInfo.innerHTML = '';
    ref.ulCountryList.innerHTML = '';
};
export const view = (ref, value, min, max) =>
{
    const valueAmount = Number(value.length);
    ref.ulCountryList.innerHTML = '';
    // 1
    if (valueAmount === min)
    {
        resetHTML(ref);
        //render murkup
        ref.divCountryInfo.insertAdjacentHTML('beforeend', createSingleCountry(value));
    }
    // 2-10
    if (valueAmount > min &&
        valueAmount <= max)
    {
        resetHTML(ref);
        //render murkup
        ref.ulCountryList.insertAdjacentHTML('beforeend', createCountryList(value));
    }
    // +10
    if (valueAmount > max)
    {
        resetHTML(ref);
        Notify.info(errMsg.tooMuch);
        return;
    }
};