import React from "react";
import CardComponenet from "./CardComponenet";

const CardList = ({ robots }) => {
    return(
        <div className="">
            {
                robots.map((user, i) => {
                    return  (
                        <CardComponenet key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                    );
                })
            }
        </div>
    );
};

export default CardList;