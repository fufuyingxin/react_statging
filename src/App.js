import React, {Component} from 'react'
//引入Hello组件
import Hello from './component/Hello'
//引入Welcome组件
import Welcome from './component/Welcome'

// 创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
               <Hello/>
               <Welcome/>
            </div>            
        )
    }
}