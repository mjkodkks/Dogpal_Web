import React, { Component } from 'react';
import './App.css';
// import Dropzone from 'react-dropzone';

class Uploadpic extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
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
      $imagePreview = (<img className="outside-box-after" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="outside-box-before"></div>);
    }

    return (
      <div className="uploadpic">
        <div className="previewComponent">

          <form onSubmit={(e) => this._handleSubmit(e)}>
            <div className="imgPreview">
              {$imagePreview}
              <input className="fileInput"
                type="file"
                onChange={(e) => this._handleImageChange(e)} />
            </div>
            <div style={{textAlign:'center'}}>
            <button className="submitButton"
              type="submit"
              onClick={(e) => this._handleSubmit(e)}>Upload Image</button></div>
          </form>
        </div>
      </div>
    )
  }
}


export default Uploadpic;
