import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import { Check2Circle, XCircle } from 'react-bootstrap-icons';
import { getDateTime } from '../../functions';

const StatusCard = (props) => {

    const { hostName, time, status } = props;

    const getStatusIcon = (status) => {
        return status?.includes("Healthy") ? 
        <Check2Circle color="green" size={45} /> 
        : <XCircle color="red" size={45} />
    };

    const getStyle = (status) => {
        return status?.includes("Healthy") ? 'cardStatusHealthy' : 'cardStatusNotHealthy'
    };

    return (
        <Card className='cardBody'>
            {getStatusIcon(status)}
            <Card.Body>
                <Card.Title className='cardTitle'>{hostName}</Card.Title>
                <Card.Title className={getStyle(status)}>{status}</Card.Title>
                {time && 
                <Card.Text className='cardSmallText'>Last request:</Card.Text>}
                <Card.Text className='cardTime'>{getDateTime(time)}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default StatusCard;
