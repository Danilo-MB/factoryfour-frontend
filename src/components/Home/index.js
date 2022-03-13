import React, { useState, useEffect } from 'react';
import { MainWrapper } from './styled';
import { getApis, getApiData } from '../../services/apiStatus';
import Table from '../../commons/Table';
import Card from '../../commons/Card';
import './style.css';

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
        <div className='mainDiv'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default Home;