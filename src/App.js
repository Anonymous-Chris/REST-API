import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Read from './read';
import Post from './post';
import Deletee from './deletee';
import Update from './update';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends Component {


  
  render (){

    
  return (
    <div className="App">
 <h1>Testing APIs</h1> 
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/read">Read</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link to="/post">Post</Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link to="/update">Update</Link>
        </li>
      </ul>

      
      <ul>
        <li>
        <Link to="/deletee">Delete</Link>
        </li>
      </ul>

    </nav>

    <Switch>
      <Route path="/read">
         <Read/>
      </Route>

      <Route path="/post">
         <Post/>
      </Route>

      <Route path="/update">
         <Update/>
      </Route>

      <Route path="/deletee">
         <Deletee/>
      </Route>

    </Switch>
 


 </Router>  
    </div>
  );
}
  }


export default App;
