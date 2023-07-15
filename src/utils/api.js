import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        let myData = await fetch(process.env.REACT_APP_DEV_URL + url, params)
        console.log('DATA: ', myData)
        return data; 
    } catch (error) {
        console.log(error);
        return error;
    }
};
