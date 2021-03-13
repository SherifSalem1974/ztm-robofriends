import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBox = () => {
    return (
        <InputGroup size="lg" className="mb-3 w-50">
            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
            </InputGroup.Prepend>
        </InputGroup>
    )
}

export default SearchBox;
