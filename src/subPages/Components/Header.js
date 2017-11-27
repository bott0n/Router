import React from 'react'


import './style/header.css'

import {NavLink,HashRouter as Router,Route} from 'react-router-dom'
export default class Header extends React.Component{
    render(){
        return(
            <section className='header'>
                <ul >
                <Router>
                <div>
                    <span ><NavLink className='list-btn' to='/home'  activeStyle={{background:'#FF8F0A'}}>Home</NavLink></span>
                    <span ><NavLink className='list-btn' to='/about'  activeStyle={{background:'#FF8F0A'}}>about</NavLink> </span>
                    <span ><NavLink className='list-btn' to='/video'  activeStyle={{background:'#FF8F0A'}}>video</NavLink> </span>
                </div>
                </Router>
                </ul>
            </section>
        )
    }
}