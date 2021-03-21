import React from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBox.css';

const SearchBox = ({searchFunc}) => {
    return (
        <div className="pa2">
            <input type="text" className="pa3 ba" placeholder="Search" onChange={searchFunc}></input>
            <div className="">
            <span className="" id="basic-addon1"><FaSearch/></span>
            </div>
        </div>
    )
}

export default SearchBox;
