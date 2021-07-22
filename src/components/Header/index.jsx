import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    handleKeyUp = (event) => {
        const { target, keyCode } = event;
        // 判断按键是否为回车
        if (keyCode !== 13) return;
        if (target.value.trim() === '') {
            alert('输入不能为空！')
            return;
        }
        //创建一个新todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false };
        this.props.addTodo(todoObj);
        // 清理输入框
        target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
