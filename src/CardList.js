import React from "react";
import { CardDeck } from 'react-bootstrap';
import CardComponenet from "./CardComponenet";

const CardList = ({ robots }) => {
    return(
        <CardDeck className="d-flex flex-wrap justify-content-center align-content-center">
            {
                robots.map((user, i) => {
                    return  (
                        <CardComponenet key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                    );
                })
            }
        </CardDeck>
    );
};

export default CardList;