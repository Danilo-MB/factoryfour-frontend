import React, { useState, useEffect } from 'react';
import { REQUEST_INTERVAL } from '../../constants';
import { getApis } from '../../services/api';
import { getDateTime } from '../../functions';
import Card from '../../commons/Card';
import './style.css';

const Home = () => {

    const [apiList, setApiList] = useState([]);

    const fetchApiList = async () => {
        const data = await getApis();
        setApiList(data);
    };

    useEffect(() => {
        fetchApiList();
    }, []);

    useEffect(() => {
        setInterval(() => 
            fetchApiList(), REQUEST_INTERVAL);
    }, []);

    return (
        <div className='containerDiv'>
            <h2 className='header'>Factory Four API Status Page</h2>
            <div className='mainDiv'>
                {apiList.map((api, index) =>
                <Card
                    key={index}
                    apiName={api?.hostname}
                    status={api?.message}
                    dateTime={getDateTime(api?.time)}
                />)}
            </div>
        </div>
    )
};

export default Home;