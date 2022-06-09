import { API, status } from './API';

//PUBLICATIONS
const publicationsAPI = API + 'publications/';

export async function getPublications() {
    const response = await fetch(publicationsAPI, {
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
        console.error(
            'ERROR IN GET PUBLICATIONS ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function getUserPublications(authorId: string, token: string) {
    const response = await fetch(publicationsAPI + 'byAuthor/' + authorId, {
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
            'ERROR IN GET USER PUBLICATIONS ' + 'code: ' + response.status,
        );
        return null;
    }
}

//FAVORITES
const favoritesAPI = API + 'favorites/';

export async function getUserFavorites(token: string) {
    const response = await fetch(favoritesAPI, {
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
            'ERROR IN GET USER FAVORITES ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function getPublicationHasFavorite(
    token: string,
    publicationId: number,
) {
    const response = await fetch(
        favoritesAPI + 'hasFavorite/' + publicationId,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        },
    );
    if (response.status === status.ok) {
        const json = await response.json();
        return json.ok;
    } else {
        console.error(
            'ERROR IN GET PUBLICATIONS FAVORITES ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function publicationAddFavorite(
    token: string,
    publicationId: number,
) {
    const response = await fetch(favoritesAPI + 'add/' + publicationId, {
        method: 'PATCH',
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
            'ERROR IN GET PUBLICATIONS ADD FAVORITES ' +
                'code: ' +
                response.status,
        );
        return null;
    }
}

export async function publicationRemoveFavorite(
    token: string,
    publicationId: number,
) {
    const response = await fetch(favoritesAPI + 'remove/' + publicationId, {
        method: 'PATCH',
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
            'ERROR IN GET PUBLICATIONS REMOVE FAVORITES ' +
                'code: ' +
                response.status,
        );
        return null;
    }
}

//POINTS
const pointsAPI = API + 'points/';

export async function getPublicationAlreadyVoted(
    token: string,
    publicationId: number,
) {
    const response = await fetch(pointsAPI + 'pointsTo/' + publicationId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status === status.ok) {
        const json = await response.json();
        return json.ok;
    } else {
        console.error(
            'ERROR IN GET PUBLICATIONS POINTS ' + 'code: ' + response.status,
        );
        return null;
    }
}

export async function publicationAddPoints(
    token: string,
    publicationId: number,
) {
    const response = await fetch(pointsAPI + 'add/' + publicationId, {
        method: 'PATCH',
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
            'ERROR IN GET PUBLICATIONS ADD POINTS ' +
                'code: ' +
                response.status,
        );
        return null;
    }
}

export async function publicationRemovePoints(
    token: string,
    publicationId: number,
) {
    const response = await fetch(pointsAPI + 'remove/' + publicationId, {
        method: 'PATCH',
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
            'ERROR IN GET PUBLICATIONS REMOVE FAVORITES ' +
                'code: ' +
                response.status,
        );
        return null;
    }
}
