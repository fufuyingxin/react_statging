import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false }
        ]
    }

    addTodo = (todoObj) => {
        //获取之前的todo list
        const { todos } = this.state;
        //加入新的
        let newTodos = [todoObj, ...todos];
        //更新todo list
        this.setState({ todos: newTodos });
    }

    updateTodo = (id, done) => {
        //获取之前的todo list
        const { todos } = this.state;
        //更新勾选状态
        let newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        //更新todo list
        this.setState({ todos: newTodos });
    }

    deleteTodo = (id) => {
        //获取之前的todo list
        const { todos } = this.state;
        //更新勾选状态
        let newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        //更新todo list
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo = {this.deleteTodo}/>
                    <Footer />
                </div>
            </div>
        )
    }
}
