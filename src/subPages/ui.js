import React from 'react';
import {BrowserRouter ,Route,IndexRoute,HashRouter as Router} from 'react-router-dom';

import Home from './Home/index'
import About from './About/index'
import Video from './Video/index'


import Header from './Components/Header'

export default ()=>
(
<div>
    <Header />
<Router >
<div>
    <Route exact path="/" component={Home}/>
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/video' component={Video}/>
 
</div>
 </Router >
 </div>
 
);