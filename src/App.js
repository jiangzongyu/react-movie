import React, { Component } from 'react';
// import fetchJsonp from 'fetch-jsonp';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
// import 'element-theme-default';

class App extends Component {
  componentDidMount(){
      fetch('http://localhost:3000/react/header').then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log(json)
      }).catch(function(ex) {
        console.log(ex)
      })
  }
  render() {
    return (
      <Router>
        <div className="block">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
