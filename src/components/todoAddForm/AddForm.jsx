import React, { useState } from 'react';
import './AddForm.css';

const AddForm = ({ onAdd, setAlert }) => {
    const [text, setText] = useState('');

    const onValueChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form className='add-form-input' onSubmit={onSubmit}>
            <input
                type='text'
                className='form-control '
                placeholder='Add new Todo'
                onChange={onValueChange}
                value={text}
            />
            <button type='submit' className='btn btn-outline-secondary'>
                Add new todo
            </button>
        </form>
    );
};
export default AddForm;
