import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm.js'
import React, { Component } from 'react';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm/>
      </div>
    );
  }
}


export default App;
