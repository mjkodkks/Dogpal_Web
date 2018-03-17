import React, { Component } from 'react';
import './App.css';
// import Dropzone from 'react-dropzone';

class TableDog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-table">
        <table className="dog-table">
          <thead>
            <tr>
              <th className="no">NO.</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody className="selectrow">
            {/*<tr >
              <td>1</td>
              <td className="animated infinite pulse"><img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" width="200" height="200" alt="Smiley face" /></td>
            </tr>
            */}
              {this.props.data.map((eachResult,index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td className="animated infinite pulse"><img src={"http://161.246.6.240:10105"+eachResult.image} width="200" height="200" alt="Smiley face" /></td>
              </tr>
            );
          })} 
          </tbody>
        </table>
      </div>
    )
  }
}


export default TableDog;
