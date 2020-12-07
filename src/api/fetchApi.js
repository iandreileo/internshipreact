import BASE_URL from './constants';

const fetchApi = async () => {
    const res = await fetch(BASE_URL);
    const data = res.json();
    return data;
}

export default fetchApi;