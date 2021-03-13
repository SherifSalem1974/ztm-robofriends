import React from 'react';
import './CardComponenet.css';
import {Card} from "react-bootstrap";

const CardComponenet = ({id, name, email}) => {
    return(
        <div className="d-flex justify-content-center align-content-center">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" alt="profile_photo" src={`https://robohash.org/${id}?200x200`}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponenet;