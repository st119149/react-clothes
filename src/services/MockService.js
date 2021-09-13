export default class MockService {

    _apiBase = "https://60e1b3b35a5596001730f1d0.mockapi.io/";

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    postResource = async (url, data) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    deleteResource = async (url, data) => {
        const response = await fetch(`${this._apiBase}${url}${data}`, {
            method: 'DELETE',

        });
    }

    getAllClothes = async () => {
        const clothes = await this.getResource('clothes');
        return clothes.map(item => this.transformObject(item));
    }

    getAllFavoriteClothes = async () => {
        const clothes = await this.getResource('favoriteClothes');
        return clothes;
    }

    addToFavoriteClothes = async itemId => {
        const response = await this.postResource(`favoriteClothes`, { itemId });

    }

    deleteFromFavoriteClothes = async id => {
        const response = await this.deleteResource(`favoriteClothes/`, id);

    }

    transformObject = (object) => {
        return {
            id: object.id,
            name: object.name,
            type: object.type,
            price: object.price,
            image: object.image,
        }
    }
}
