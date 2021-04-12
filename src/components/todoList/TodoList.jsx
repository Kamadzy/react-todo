import React from 'react';
import TodoLostItem from '../todoListItem/TodoListItem';

import './TodoList.css';

const TodoList = ({ todos, onDelete }) => {
    return (
        <div className='todo-list'>
            {todos.map((el) => (
                <TodoLostItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    onDelete={() => onDelete(el.id)}
                />
            ))}
        </div>
    );
};
export default TodoList;
