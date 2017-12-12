import React, { Component } from 'react';
import '../css/about.css';
import fetchJsonp from 'fetch-jsonp';

let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});
class About extends Component {
    
    render() {
        return (
            <div className="about-content">
               <h1>这是关于首页</h1> 
            </div>
        )
    }
    }

export default About;
