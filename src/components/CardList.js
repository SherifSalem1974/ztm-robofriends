import React from "react";
import CardComponenet from "./CardComponenet";

const CardList = ({ robots }) => {
    return(
        <div className="">
            {
                robots.map((user, i) => {
                    return  (
                        <CardComponenet 
                        key={robots[i].id} 
                            id={robots[i].id} name={robots[i].name} 
                            email={robots[i].email} 
                            city={robots[i].address.city}
                            company={robots[i].company.name}
                            website={robots[i].website}
                            phone={robots[i].phone}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;