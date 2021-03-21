import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import Scroll from "./Scroll.js"
import Loading from "./Loading.svg"
import "./App.css";
import "tachyons";

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
                        <div className="picDiv">
                            <img src={Loading} alt="loading logo" className="loadinPic"></img>
                        </div>
                    </div>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>ZTM Robo Friends App</h1>
                    <SearchBox searchFunc={this.searchFunc}/>
                    <Scroll>
                        <CardList robots={fliteredRobot}/>
                    </Scroll>
                    
                </div>
            );
        }
        
    };
};

export default App;