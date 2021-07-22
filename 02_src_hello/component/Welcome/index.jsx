import React, {Component} from 'react'
//引入CSS样式
import './index.css'

// 创建并暴露Welcome组件
export default class Welcome extends Component{
    render(){
        return(
            <h2 className="welcome">
               welcome to React! 
            </h2>            
        )
    }
}