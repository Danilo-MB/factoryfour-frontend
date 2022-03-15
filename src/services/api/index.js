import axios from 'axios';
import { API_NAMES } from '../../constants'; 

const path = apiUrl => `https://api.factoryfour.com/${apiUrl}/health/status`;

export const getApiData = (apiUrl) => {
    return axios.get(path(apiUrl))
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        if (error.reponse) {
            return error.response;
        }
        return ({message: error.message});
    })
};

export const getApis = async () => {
    const apiNames = API_NAMES;
    let apiList = [];
    for (let apiName of apiNames) {
        let apiObject = await getApiData(apiName);
        apiObject.name = apiName;
        if (!apiObject.time) {
            apiObject.time = Date.now()
        }
        apiList.push(apiObject)
    }
    return apiList;
};