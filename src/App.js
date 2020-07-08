import React from 'react';
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Favourite from './components/Favourite/Favourite'
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
