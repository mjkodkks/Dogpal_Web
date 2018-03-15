import React, { Component } from 'react';
import './App.css';
import logo_pic from './pic/logodogpal_text.png';
import Uploadpic from './uploadpic';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
       <img className="logo img" src={logo_pic}></img>
       </div>
       <div className="secondqoute">friend of best friend</div>
       <Uploadpic />
      </div>
    );
  }
}

export default App;
