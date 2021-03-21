import React from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBox.css';

const SearchBox = ({searchFunc}) => {
    return (
        <div className="input-group mb-3 p-3 justify-content-center">
            <input type="text" className="searchInput" placeholder="Search" onChange={searchFunc}></input>
            <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"><FaSearch/></span>
            </div>
        </div>
    )
}

export default SearchBox;
