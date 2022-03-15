import axios from 'axios';
import { API_NAMES } from '../../constants'; 

const path = apiUrl => `https://api.factoryfour.com/${apiUrl}/health/status`;

const getApiData = async (apiUrl) => {
    try {
        const response = await axios.get(path(apiUrl));
        return response.data;
    } catch (error) {
        if (error.reponse) {
            return error.response;
        }
        return ({message: error.message});
    }
};

export const getApis = async () => {
    const apiNames = API_NAMES;
    let apiList = [];
    for (let apiName of apiNames) {
        const apiObject = await getApiData(apiName);
        apiObject.name = apiName;
        if (!apiObject.time) {
            apiObject.time = Date.now()
        }
        apiList.push(apiObject)
    }
    return apiList;
};