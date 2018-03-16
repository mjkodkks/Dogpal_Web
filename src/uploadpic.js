import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TableDog from './tableDog';
// import Dropzone from 'react-dropzone';

class Uploadpic extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', data: '', };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file

    var file_image = this.state.file;
    /* axios.get('http://161.246.6.240:10105/api/test/').then( data => {
      console.log(data.data);
    
    }) */
    axios.post('http://161.246.6.240:10105/api/upload/a.jpg', file_image)
      .then(response => {
        this.setState({ data: response.data.similar })
        console.log(this.state.data)
      }).catch(errors => console.log(errors));
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="outside-box-after" src={imagePreviewUrl} alt="Smiley face" />);
    } else {
      $imagePreview = (<div className="outside-box-before"></div>);
    }

    return (
      <div>
        <div className="uploadpic">
          <div className="previewComponent">

            <form onSubmit={(e) => this._handleSubmit(e)}>
              <div className="imgPreview">
                {$imagePreview}
                <input className="fileInput"
                  type="file"
                  onChange={(e) => this._handleImageChange(e)} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className="submitButton"
                  type="submit"
                  onClick={(e) => this._handleSubmit(e)}>Upload Image</button></div>
            </form>
          </div>
        </div>
        {this.state.data === '' ?<div></div>:<TableDog data={this.state.data} />}
      </div>
    )
  }
}


export default Uploadpic;
