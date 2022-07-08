export const catsOption = {
    method: 'GET',
    headers: {
        'x-api-key': '6d35acf4-5b74-48e6-960c-ab52c2fda7a0'
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
