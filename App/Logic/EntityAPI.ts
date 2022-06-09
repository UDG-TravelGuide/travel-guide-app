import { API, status } from './API';

export async function getCountries() {
    const response = await fetch(API + 'countries', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    if (response.status === status.ok) {
        const json = await response.json();
        return json;
    } else {
        console.error('ERROR IN GET COUNTRIES ' + 'code: ' + response.status);
        return null;
    }
}
