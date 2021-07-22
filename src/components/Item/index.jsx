import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    //标识鼠标移入移出
    state = { mouse: false };

    // 鼠标移入移出的回调
    handleMosue = (flag) => {
        // 一定要返回函数      
        return () => {
            this.setState({ mouse: flag })
            //  console.log(flag)
        }
    }

    // 鼠标勾选选择框的回调
    handleChecked = (id) => {
        return (event) => {
            const done = event.target.checked;
            this.props.updateTodo(id, done)
        }
    }

    // 点击删除按钮的回调
    handleDelete = (id) => {
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMosue(true)} onMouseLeave={this.handleMosue(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleChecked(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
