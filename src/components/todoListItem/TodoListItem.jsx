import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TodoListItem.css';

const TodoListItem = ({ id, title, onDelete }) => {
    return (
        <div className='todo-item' key={id}>
            <span className=''>{title}</span>
            <div className='todo-item__delete'>
                <button
                    className='btn-trash btn-sm'
                    type='button'
                    onClick={onDelete}
                >
                    <FontAwesomeIcon icon='trash' />
                </button>
            </div>
        </div>
    );
};
export default TodoListItem;
