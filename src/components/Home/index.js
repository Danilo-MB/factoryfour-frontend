import React, { useState, useEffect } from 'react';
import { REQUEST_INTERVAL } from '../../constants';
import { getApis } from '../../services/api';
import StatusCard from '../../commons/StatusCard';
import './style.css';
import { trimTextValue } from '../../functions';

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
                <StatusCard
                    key={index}
                    hostName={api?.name}
                    status={api?.success ? trimTextValue(api.message, ' ') : 'NOT OPERATIONAL'}
                    time={api?.time}
                />)}
            </div>
        </div>
    )
};

export default Home;