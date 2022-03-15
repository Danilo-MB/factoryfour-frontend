import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import { Check2Circle, XCircle } from 'react-bootstrap-icons';
import { format } from 'date-fns'

const StatusCard = (props) => {

    const { apiName, hostName, time, message, status } = props;

    const getStatusIcon = (status) => {
        return status ? 
        <Check2Circle color="green" size={45} /> 
        : <XCircle color="red" size={45} />
    };

    const getStyle = (status) => {
        return status ? 'cardStatusHealthy' : 'cardStatusNotHealthy'
    };

    return (
        <Card className='cardBody'>
            {getStatusIcon(status)}
            <Card.Body>
                <Card.Title className='cardTitle'>{apiName}</Card.Title>
                {hostName &&
                <Card.Title className='cardSmallText'>{hostName}</Card.Title>}
                <Card.Title className={getStyle(status)}>{message}</Card.Title>
                <Card.Text className='cardSmallText'>Last request:</Card.Text>
                <Card.Text className='cardTime'>{format(time, 'HH:mm:ss')}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default StatusCard;
