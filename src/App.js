import React, { Component, Fragment } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import Loading from "./Loading.svg"
import "./App.css";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(users => {
            this.setState({ robots: users })
        });
    };

    searchFunc = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {

        const fliteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <div className="picContainer">
                        <img src={Loading} alt="loading logo" className="loadinPic"></img>
                    </div>
        } else {
            return (
                <Fragment>
                    <h1 className="text-center">ZTM Robo Friends App</h1>
                    <SearchBox searchFunc={this.searchFunc}/>
                    <CardList robots={fliteredRobot}/>
                </Fragment>
            );
        }
        
    };
};

export default App;