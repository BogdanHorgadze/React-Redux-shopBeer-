import React from 'react';
import logo from './logo.svg';
import Header from './containers/Header/Header'
import Content from "./containers/Content/Content";
import Search from "./containers/Search/Search";
import Favourite from './containers/Favourite/Favourite'
import {Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Search/>
        <Switch>
          <Route path='/' exact component={Content}/>
          <Route path='/favourite' component={Favourite}/>
        </Switch>
    </div>
  );
}

export default App;
