import axios from 'axios';
import { API_NAMES } from '../../constants'; 

const path = apiUrl => `https://api.factoryfour.com/${apiUrl}/health/status`;

export const getApiData = (apiUrl) => {
    return axios.get(path(apiUrl))
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        //console.log(error.response.request.responseURL, "error.response")
        return error;
    })
};

export const getApis = async () => {
    const apiNames = API_NAMES;
    let apiList = [];
    for (let apiName of apiNames) {
        let apiObject = await getApiData(apiName);
        apiList.push(apiObject)
    }
    return apiList;
};