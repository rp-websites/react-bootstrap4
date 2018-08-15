import React, {Component} from 'react';
import './uploader.css';

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.previewFile = this.previewFile.bind(this);
        this.state = {
            uploadedFile: null
        }
    }

    previewFile = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            uploadedFile: URL.createObjectURL(event.target.files[0])
        })
    }
    removeImage = (event) => {
        this.setState({
            uploadedFile: (this.state.uploadedFile === null) ? URL.createObjectURL(event.target.files[0]) : null
        })
    }

    render() {
        return (
            <div className="upload-xs">
                <div className="upload-item">
                    <i className="icon-upload pos-middle"/>
                    <input type="file" className="pos-middle upload-input" onChange={this.previewFile}/>
                    {
                        !(this.state.uploadedFile === null) ? (
                            <div>
                                <img src={this.state.uploadedFile} alt="Upload" className="pos-middle upload-img"/>
                                <button className="btn-trans upload-remove" onClick={this.removeImage}>
                                    <i className="icon-close"/>
                                </button>
                            </div>
                        ) : null
                    }

                </div>
            </div>
        )
    }


}

export {Uploader};


