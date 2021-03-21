import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Loading from "../components/Loading.svg";
import "../containers/App.css";
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
        const { robots, searchField } = this.state;
        const fliteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
           <div className="picContainer">
                <div className="picDiv">
                    <img src={Loading} alt="loading logo" className="loadinPic"></img>
                </div>
            </div> :
            <div className='tc'>
                <h1 className='f1'>ZTM Robo Friends App</h1>
                <SearchBox searchFunc={this.searchFunc}/>
                <Scroll>
                    <CardList robots={fliteredRobot}/>
                </Scroll>
                
            </div>
    } 
};
export default App;