import React, { useState, useEffect } from 'react';
import { MainWrapper } from './styled';
import { apiArray } from '../../constants';
import { getApis, getApiData } from '../../services/apiStatus';
import { getDateTime } from '../../functions';
import Table from '../../commons/Table';
import Card from '../../commons/Card';
import './style.css';
// Setear el tiempo del setTimeOut en CONSTANTS!!!!
const Home = () => {

    //const status = getApiData("assets");
    //console.log(status, "status")
    // const [data, setData] = useState({});

    // const fetch = async () => {
    //     const data = await getApiData("assets")
    //     setData(data)
    //     console.log(data, "data adentro")
    // }
    
    // useEffect(() => {
    //     fetch()
    // }, [])
    // console.log(data, "data")

    const [apiList, setApiList] = useState([]);

    const fetchApiList = async () => {
        const data = await getApis();
        setApiList(data);
        //console.log(apiList, "dentro del fetch")
    };

    useEffect(() => {
        fetchApiList();
    }, []);
    console.log(apiList, "apiList")

    return (
        <div className='containerDiv'>
            <h2>Factory Four API Status Page</h2>
            <div className='mainDiv'>
                {apiArray.map(api =>
                <Card 
                    apiName={api.hostname}
                    status={api.status}
                    dateTime={getDateTime(api.date)}
                />)}
            </div>
        </div>
    )
};

export default Home;