import axios from 'axios';
import { API_NAMES } from '../../constants'; 

const path = apiUrl => `https://api.factoryfour.com/${apiUrl}/health/status`;

export const getApiData = (apiUrl) => {
    return axios.get(path(apiUrl))
    .then((response) => {
    // handle success
        //console.log(response.data, "response");
        return response.data
    })
    .catch((error) => {
        // handle error
        //console.log(error, "error info");
    })
};

export const getApis = async () => {
    const apiNames = API_NAMES;
    let apiList = [];
    for (let apiName of apiNames) {
        let apiObject = await getApiData(apiName);
        apiList.push(apiObject)
        //console.log(apiList)
    }
    return apiList;
};