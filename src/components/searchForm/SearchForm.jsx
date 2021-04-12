import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <div className='search-input'>
            <input
                type='text'
                className='form-control '
                placeholder='Search your todo'
            />
        </div>
    );
};
export default SearchForm;
