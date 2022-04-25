export const createCountryList = (valueObj) => {
    const str = valueObj
        .map(({name: {official}, flags: {svg} }) =>
            `
                <li class="country-list-item">
                    <img class="country-icon" width="20" height="16" src="${svg}" alt="flag-${official}"/>
                    ${official}
                </li>
            `
        )
        .join('\n');
    return str;
};

export const createSingleCountry = (valueObj) => {
     const str = valueObj
        .map(({name: {official}, capital, population, flags: {svg}, languages }) =>
            `
                <h1>
                    <img class="country-icon" width="40" height="32" src="${svg}" alt="flag-${official}">
                    ${official}
                </h1>
                <p class="country-info-item"><span class="country-info-head">Capital: </span> ${capital}</p>
                <p class="country-info-item"><span class="country-info-head">population: </span> ${population}</p>
                <p class="country-info-item"><span class="country-info-head">languages: </span> ${Object.values(languages)}</p>
            `
        )
        .join('\n');
    return str;
 };