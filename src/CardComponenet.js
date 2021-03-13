import React from 'react';
import './CardComponenet.css';
import {Card} from "react-bootstrap";

const CardComponenet = () => {
    return(
        <div className="d-flex justify-content-center align-content-center cardDiv">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" alt="profile_photo" src="https://robohash.org/test?200x200" />
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>email</Card.Text>
                </Card.Body>
            </Card>
        </div>
        
        
    );
}

export default CardComponenet;