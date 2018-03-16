import React, { Component } from 'react';
import './App.css';
// import Dropzone from 'react-dropzone';

class TableDog extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div class="container-table">
        <table class="dog-table">
          <tr>
            <th>NO.</th>
            <th>Result</th>
          </tr>
          {this.props.data.map((eachResult,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td><img src={"http://161.246.6.240:10105"+eachResult.image} alt="Smiley face" /></td>
              </tr>
            );
          })}
        </table>
      </div>
    )
  }
}


export default TableDog;
