import { urls } from './constans.js';
import { createMarker } from './map.js';

let fetchData;
export const data = async (error) => {
    try {
        const response = await fetch(urls.get);
        fetchData = await response.json();
        return fetchData;
    } catch (err) {
        error();
        return [];
    }
};

export const apiSendData =  async (data, reset, message, error) => {
    fetch(urls.post, {
        method: 'post',
        body: JSON.stringify(data)
    })
        .then((data) => data.text())
        .then((res) => {
            createMarker(data);
            message();
            reset();
        })
        .catch(() => error())
};
