import axios from 'axios';
const url = 'https://disease.sh/v3/covid-19/historical';

export const fetchData = async (total) => {
    let changeableUrl = url;

    if (total) {
        changeableUrl = `${url}/?lastdays=${total}`;
    }

    try {
        const { data } = await axios.get(changeableUrl);
        return data;
    } 
    catch (error) {
        return error;
    }
    

}