import React, { Component } from 'react'
import "./index.css"

export default class Footer extends Component {

    handleAll = (event) => {
        const done = event.target.checked;
        this.props.checkAll(done)
    }

    handleClearAllDone = () => {
        this.props.clearAllDone();
    }

    render() {
        const { todos } = this.props;
        //已完成数量
        const countDone = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        //总数
        const count = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={count === countDone && count !== 0 ? true : false} onChange={this.handleAll} />
                </label>
                <span>
                    <span>已完成{countDone}</span> / 全部{count}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
