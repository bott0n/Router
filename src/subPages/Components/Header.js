import React from 'react'

import './style/header.css'
export default class Header extends React.Component{
    render(){
        return(
            <ul className='header'>
                <a href='#/home'>Home</a>
                <a href='#/about'>About</a>
                <a href='#/video'>Video</a>
            </ul>
        )
    }
}