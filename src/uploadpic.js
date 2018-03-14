import React, { Component } from 'react';
import './App.css';
import Dropzone from 'react-dropzone';

class Uploadpic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFiles: []
    }
  }


  render() {
    return (
      <div className="uploadpic">
        <div className="outside-box" for="uploadfor">
          <div className="uploadpic-box" ></div>
        </div>
        <button className="btn"></button>
      </div>
    );
  }
}

export default Uploadpic;
