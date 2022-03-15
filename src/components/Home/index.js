import React, { useState, useEffect } from 'react';
import { REQUEST_INTERVAL } from '../../constants';
import { getApis } from '../../services/api';
import StatusCard from '../../commons/StatusCard';
import './style.css';
import { trimTextValue } from '../../utils';
import Spinner from '../../commons/Spinner';

const Home = () => {

    const [apiList, setApiList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchApiList = async () => {
        const data = await getApis();
        setApiList(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchApiList();
    }, []);

    useEffect(() => {
        setInterval(() => fetchApiList(), REQUEST_INTERVAL);
    }, []);

    if (isLoading) return <Spinner />;
    
    return (
        <div className='containerDiv'>
            <h2 className='header'>Factory Four API Status Page</h2>
            <div className='mainDiv'>
                {apiList.map((api, index) =>
                <StatusCard
                    key={index}
                    apiName={api?.name}
                    hostName={api?.hostname}
                    message={api?.success ? trimTextValue(api.message, ' ') : 'NOT OPERATIONAL'}
                    status={api?.success}
                    time={api?.time}
                />)}
            </div>
        </div>
    )
};

export default Home;