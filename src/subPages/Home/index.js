import React from 'react';
import './main.css';

import Header from '../Components/Header'
export default class Home extends React.Component{
    render(){
        return(
            
<div className='main'>
            
    <Header/>
            <p className='welcome-panel'>
              
                Welcome to my page!
            </p>


    <div className='middle'>
        <div className='detail-panel'>
            <a href="https://github.com/jacky2001114" target='_blank'>
          
            </a>

            <p>Hi! This page is simple</p>
         </div>
    </div>
</div>
        );
    }
};