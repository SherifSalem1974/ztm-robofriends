import React, { Component, Fragment } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
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

        return (
        <Fragment>
            <h1 className="text-center">ZTM Robo Friends App</h1>
            <SearchBox searchFunc={this.searchFunc}/>
            <CardList robots={fliteredRobot}/>
        </Fragment>
    );
    };
};

export default App;