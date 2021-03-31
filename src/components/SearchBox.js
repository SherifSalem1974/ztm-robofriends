import React from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBox.css';

const SearchBox = ({searchFunc}) => {
    return (
        <div className="pa2 container">
            <input type="text" className="pa3 ba br3 ma2" placeholder="Search" onChange={searchFunc}></input>
            <div className="searchLense">
            <span className="" id="basic-addon1"><FaSearch/></span>
            </div>
        </div>
    )
}

export default SearchBox;
