import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import { Check2Circle, XCircle } from 'react-bootstrap-icons';

const ApiCard = (props) => {

    const { apiName, dateTime, status } = props;

    const getStatusIcon = (status) => {
        return status?.includes("Healthy") ? 
        <Check2Circle color="green" size={45} /> 
        : <XCircle color="red" size={45} />
    };

    return (
        <Card className='cardBody'>
            {getStatusIcon(status)}
            <Card.Body>
                <Card.Title className='cardTitle'>{apiName}</Card.Title>
                <Card.Title className={status?.includes("Healthy") ? 'cardStatusSuccess' : 'cardStatusFailed'}>
                    {status}
                </Card.Title>
                <Card.Text className='cardTime'>{dateTime}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default ApiCard;
