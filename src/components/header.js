import React, { Component } from 'react';
import '../css/header.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

class Index extends Component {
    
    render(){
        return (
            <Router>
                <div className="header">
                    <ul className="content">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">电影</Link></li>
                        <li><Link to="/contact">联系我们</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <div className="footer"><Link to="">@姜宗禹</Link></div>
                </div>
            </Router>

        )
    }    
}

export default Index;
