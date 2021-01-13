// import axios from 'axios';
// const url = 'https://disease.sh/v3/covid-19/historical';

// export const fetchData = async (total) => {
//     let changeableUrl = url;

//     if (total) {
//         changeableUrl = `${url}/?lastdays=${total}`;
//     }

//     try {
//         const { data } = await axios.get(changeableUrl);
//         return data;
//     } 
//     catch (error) {
//         return error;
//     }
// }

import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};

export const fetchCountHistory = async () => {
    try {
        const { data } = await axios.get('https://disease.sh/v3/covid-19/historical?lastdays=30');
        console.log(data);
    }
    catch(error) {
        return error;
    }
}