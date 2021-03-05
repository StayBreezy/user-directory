import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddressBook from './AddressBook';


export default class App extends Component {
  render() {
    return(
      <div className="App">
        <header><h1>Home</h1></header>
        <AddressBook />
      </div>
    )
  }
}
