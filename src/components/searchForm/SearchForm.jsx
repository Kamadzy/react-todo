import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    console.log(props);
    return (
        <div className='search-input'>
            <input
                onChange={({ target: { value } }) => props.search(value)}
                type='text'
                className='form-control '
                placeholder='Search your todo'
            />
        </div>
    );
};
export default SearchForm;
