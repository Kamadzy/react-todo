import React from 'react';
import './Header.css';

const Header = ({ allTodos }) => {
    return (
        <div className='app-header'>
            <h1>Awesome Todo App</h1>
            <h2>{allTodos} todo's, finished 0</h2>
        </div>
    );
};
export default Header;
