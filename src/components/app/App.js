import React, { Component } from 'react';
//import axios from 'axios';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import SearchForm from '../searchForm/SearchForm';
import AddForm from '../todoAddForm/AddForm';
import Alert from '../Alert/Alert';

import './App.css';

class App extends Component {
    state = {
        todos: [
            { id: 1, title: 'delectus aut autem' },
            { id: 2, title: 'quis ut nam facilis et officia qui' },
            { id: 3, title: 'fugiat veniam minus' },
            { id: 4, title: 'et porro tempora' },
        ],
        alert: null,
    };
    // componentDidMount() {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/todos?_page=1&limit=10')
    //         .then((res) => this.setState({ todos: res.data }));
    // }
    deleteItem = (id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((elem) => {
                return elem.id === id;
            });
            const newArr = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1),
            ];
            return {
                todos: newArr,
            };
        });
    };
    addNewItem = (body) => {
        const randId = Math.floor(Math.random() * 1000);
        const newItem = {
            id: randId,
            title: body,
        };
        this.setState(({ todos }) => {
            const newArr = [...todos, newItem];
            return {
                todos: newArr,
            };
        });
    };
    showAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });
        setTimeout(() => this.setState({ alert: null }), 5000);
    };
    render() {
        const { todos, alert } = this.state;
        const allTodos = todos.length;
        return (
            <div className='app'>
                <Header allTodos={allTodos} />
                <SearchForm />
                <Alert alert={alert} />
                <AddForm onAdd={this.addNewItem} setAlert={this.showAlert} />
                <TodoList todos={todos} onDelete={this.deleteItem} />
            </div>
        );
    }
}
export default App;
