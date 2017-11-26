import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <ul>
                <a href='home'>Home</a>
                <a href='about'>About</a>
                <a href='video'>Video</a>
            </ul>
        )
    }
}