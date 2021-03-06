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
    /* axios.get('http://203.150.225.205:10104/api/test/').then( data => {
      console.log(data.data);
    
    }) */
    axios.post('http://203.150.225.205:10104/api/upload/a.jpg', file_image)
      .then(response => {
        this.setState({ data: response.data.similar })
        console.log(this.state.data)
      }).catch(errors => console.log(errors));
  }

  _cancelSubmit(e) {
    e.preventDefault();
      this.setState({
        file: '',
        imagePreviewUrl: '',
        data: '',
      });
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
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img className="outside-box-after" src={imagePreviewUrl} alt="Smiley face" />);
    } else {
      imagePreview = (<div className="outside-box-before"></div>);
    }

    return (
      <div>
        <div className="uploadpic">
          <div className="previewComponent">

            <form onSubmit={(e) => this._handleSubmit(e)}>
              <div className="imgPreview">
                {imagePreview}
                <input className="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => this._handleImageChange(e)} />
              </div>
              <div style={{ textAlign: 'center' }}>
                {this.state.file === ''
                  ? <button type="button" className='disablebtn' disabled>Browse your lovely dog :)</button>
                  :<div> 
                  <button className='submitButton' type="submit"
                  onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                  <button className='cancelButton' type="reset"
                  onClick={(e) => this._cancelSubmit(e)}>X</button>
                  </div>
                }
              </div>
            </form>
          </div>
        </div>
        {this.state.data === '' ?<div></div>:<TableDog data={this.state.data} />}
      </div>
    )
  }
}


export default Uploadpic;
