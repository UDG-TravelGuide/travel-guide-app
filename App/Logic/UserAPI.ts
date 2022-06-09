import { API, status } from './API';
const userAPI = API + 'users/';

export async function login(user: { email: string; password: string }) {
    const response = await fetch(userAPI + 'login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (response.status === status.ok) {
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
    const response = await fetch(userAPI + 'new', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    if (response.status === status.ok) {
        const json = await response.json();
        return json.token;
    } else {
        console.error('ERROR IN FETCH REGISTER ' + 'code: ' + response.status);
        return null;
    }
}

export async function getCurrent(token: string) {
    const response = await fetch(userAPI + 'current', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status === status.ok) {
        const json = await response.json();
        return json;
    } else {
        console.error(
            'ERROR IN FETCH CURRENT USER ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function getUser(token: string, userId: number) {
    const response = await fetch(userAPI + '/' + userId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status === status.ok) {
        const json = await response.json();
        console.log(json);
        return json;
    } else {
        console.error(
            'ERROR IN FETCH CURRENT USER ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function putUser(
    token: string,
    userId: number,
    user: {
        userName: string;
        email: string;
        password: string;
        birthDate: string;
        profilePhoto: string;
    },
) {
    const response = await fetch(userAPI + '/edit/' + userId, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            body: JSON.stringify(user),
        },
    });
    if (response.status === status.ok) {
        const json = await response.json();
        return json;
    } else {
        console.error(
            'ERROR IN FETCH CURRENT USER ' + 'code: ' + response.status,
        );
        return null;
    }
}
