const API = 'https://travelguideuserapi.herokuapp.com/users';
const STATUS_OK = 200;

export async function login(user: { email: string; password: string }) {
    const response = await fetch(API + '/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (response.status === STATUS_OK) {
        const json = await response.json();
        return json.token;
    } else {
        console.error('ERROR IN FETCH LOGIN ' + 'code: ' + response.status);
        return null;
    }
}

export async function register(user: {
    userName: string;
    email: string;
    password: string;
    birthDate: string;
}) {
    const response = await fetch(API + '/new', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (response.status === STATUS_OK) {
        const json = await response.json();
        return json.token;
    } else {
        console.error('ERROR IN FETCH REGISTER ' + 'code: ' + response.status);
        return null;
    }
}
