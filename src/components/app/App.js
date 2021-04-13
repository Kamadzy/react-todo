import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import SearchForm from '../searchForm/SearchForm';
import AddForm from '../todoAddForm/AddForm';
import Alert from '../Alert/Alert';

import './App.css';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'delectus aut autem' },
        { id: 2, title: 'quis ut nam facilis et officia qui' },
        { id: 3, title: 'fugiat veniam minus' },
        { id: 4, title: 'et porro tempora' },
    ]);
    const [alert, setAlert] = useState(null);
    const [filtered, setFiltered] = useState([]);

    const deleteItem = (id) => {
        const index = todos.findIndex((elem) => {
            return elem.id === id;
        });
        const newArr = [...todos.slice(0, index), ...todos.slice(index + 1)];

        setTodos(newArr);
    };
    const addNewItem = (body) => {
        const randId = Math.floor(Math.random() * 1000);
        const newItem = {
            id: randId,
            title: body,
        };
        const newArr = [...todos, newItem];
        setTodos(newArr);
    };
    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 5000);
    };
    const searchPost = (val) => {
        console.log('123', val);
        let currentTodo = [],
            newList = [];
        if (val !== '') {
            currentTodo = todos;
            newList = currentTodo.filter((todo) => {
                const lc = todo.title.toLowerCase();
                const filter = val.toLowerCase();
                return lc.includes(filter);
            });
        } else newList = todos;
        setFiltered(newList);
    };
    useEffect(
        (_) => {
            setFiltered(todos);
        },
        [todos]
    );

    const allTodos = todos.length;
    return (
        <div className='app'>
            <Header allTodos={allTodos} />
            <SearchForm search={searchPost} />
            <Alert alert={alert} />
            <AddForm onAdd={addNewItem} setAlert={showAlert} />
            <TodoList todos={filtered} onDelete={deleteItem} />
        </div>
    );
};
export default App;
