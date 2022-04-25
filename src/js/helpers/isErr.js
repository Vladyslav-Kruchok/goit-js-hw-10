import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const errMsg =
{
    empty: 'EMPTY!!!',
    addressStr: 'Failed to fetch',
    notFound: 'Ops, there is no country with that name',
    tooMuch: 'Too many matches found. Please enter a more specific name.'
};
const errValue =
{
    empty: '',
    addressStr: 'Failed to fetch',
    notFound: 'Not Found'
}
export const isError = (value) =>
{
    let res = true;
    switch (value.message)
    {
        case errValue.addressStr:
        {
            Notify.warning(errMsg.addressStr);
        }
            break;
        case errValue.notFound:
        { 
            Notify.failure(errMsg.notFound);
        }
            break;
        default:
            res = false;
            break;
    }
    return res
}
