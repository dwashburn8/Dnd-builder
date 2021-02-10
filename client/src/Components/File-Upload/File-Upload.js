import React from 'react';
import "./File-Upload.css"
import 'react-dropzone-uploader/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Progress } from 'reactstrap';




class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: 0
    }

  }

  checkMimeType = (event) => {

    let files = event.target.files
    let err = [] // create empty array
    const types = ['image/png', 'image/jpeg', 'image/gif']
    for (var x = 0; x < files.length; x++) {
      if (types.every(type => files[x].type !== type)) {
        err[x] = files[x].type + ' is not a supported format\n';
        // assign message to array
      }
    };
    for (var z = 0; z < err.length; z++) { // loop create toast massage
      event.target.value = null
      toast.error(err[z])
    }
    return true;
  }

  maxSelectFile = (event) => {
    let err = []
    let files = event.target.files // create file object
    if (files.length > 10) {
      const msg = 'Only 10 images can be uploaded at a time'
      event.target.value = null // discard selected file
      console.log(msg)
      err.push(msg);
      toast.error(err[0])
      return false;

    }
    return true;
  }

  checkFileSize = (event) => {
    let files = event.target.files
    let size = 2000000
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + 'is too large, please pick a smaller file\n';
      }
    };
    for (var z = 0; z < err.length; z++) {
      toast.error(err[z])
      event.target.value = null
    }
    return true;
  }

  onChangeHandler = event => {
    var files = event.target.files
    if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkMimeType(event)) {
      // if return true allow to setState
      this.setState({
        selectedFile: files
      })
    }
  }

  onClickHandler = () => {
    if(this.state.selectedFile.length > 0){
      
      var progressBar = document.getElementById("progress");
      console.log(progressBar);
      progressBar.style.display = "flex"
      const data = new FormData()
      for (var x = 0; x < this.state.selectedFile.length; x++) {
        data.append('file', this.state.selectedFile[x])
      }
  
      axios.post("http://localhost:3001/upload", data, {
        // receive two    parameter endpoint url ,form data
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
          })
        },
      })
  
        .then(res => { // then print response status
          toast.success('Upload Success')
        }).catch(err => {
          toast.error('Upload Failed ' + err)
        })
    } else {
      toast.error("Please upload documents")
    }


  }

  render() {
    return (
      <div className="FileUploader">
        <form method="post" action="#" id="#">



          <div className="form-group files">

            <ToastContainer />
            <label for="file-upload">Drag your files here</label>
            <input id="file-upload" type="file" multiple className="form-control" name="file" onChange={this.onChangeHandler} />

            <Progress id="progress" max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>
            <button type="button" className="btn uploadBtn btn-block mt-3" onClick={this.onClickHandler}>Upload</button>
          </div>


        </form>
      </div>
    );
  }
}
export default FileUpload;