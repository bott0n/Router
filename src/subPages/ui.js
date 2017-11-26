import React from 'react';
import {BrowserRouter ,Route,IndexRoute} from 'react-router-dom';

import Home from './Home/index'
import About from './About/index'
import Video from './Video/index'

export default ()=>
(
<BrowserRouter >
<div>
    <Route exact path="/" component={Home}/>
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/video' component={Video}/>
 
</div>
 </BrowserRouter >
 
);