import React from "react";
import { CardDeck } from 'react-bootstrap';
import CardComponenet from "./CardComponenet";

const CardList = ({ robots }) => {
    const getUser = robots.map((user, i) => {
        return  <CardComponenet id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    
    return(
        <CardDeck className="d-flex justify-content-center align-content-center">
            {getUser}
        </CardDeck>
    );
};

export default CardList;