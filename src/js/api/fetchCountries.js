const BASE_URL = 'https://restcountries.com/v3.1/name';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const responseResult = (response) =>
{
    if (!response.ok)
    {
        throw new Error(response.statusText);
    }
    return response.json();
};

const fetchUrlArg = (baseURL, pathAPI, ...arg) =>
{
    const path = `${baseURL}/${pathAPI}`;
    let fullPath = path;
    
    //add to te end args
    arg.forEach(elem => {
        fullPath += `${elem},`;
    });
    
    //del last coma
    fullPath = fullPath.slice(0, -1);
    
    //Request
    const res =
        fetch(fullPath)
        .then(response =>
        {
            return responseResult(response);
        })
        .catch(err => err.message);
    return res;
}
/**
 * NAME
 * Search by country name. It can be the native name or partial name
 * https://restcountries.com/v2/name/{name}
 * https://restcountries.com/v2/name/peru
 * https://restcountries.com/v2/name/united
 * 
 * FIELDS
 * Search by country full name by fields
 * https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
https://restcountries.com/v3.1/name?fields=name,capital,currencies
 * @param {*} name 
 * @returns Promise
 */
const fetchCountries = (name, ...arg) =>
{ 
    const errMsg = 'NO ARGUMENTS';
    const res = (!arg.length)
        ? errMsg
        : fetchUrlArg(BASE_URL, name, ...arg);    
    return res;
};

export { fetchCountries };