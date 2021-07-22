import React, {Component} from 'react'
//引入CSS样式
import './index.css'

// 创建并暴露Hello组件
export default class Hello extends Component{
    render(){
        return(
            <h2 className="hello">
               hello,React! 
            </h2>            
        )
    }
}