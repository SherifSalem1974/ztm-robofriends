import React, {Fragment} from 'react';
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox.js";

const App = () => {
    return (
        <Fragment>
            <h1>ZTM Robo Friends App</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </Fragment>
    );
};

export default App;