import React from 'react';
import { FaSearch } from "react-icons/fa";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import './SearchBox.css';

const SearchBox = ({searchFunc}) => {
    return (
        <InputGroup className="mb-3 justify-content-center p-3">
             <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 p-4 " onChange={searchFunc}/>
                <span><FaSearch/></span>
            </Form>
        </InputGroup>
    )
}

export default SearchBox;
