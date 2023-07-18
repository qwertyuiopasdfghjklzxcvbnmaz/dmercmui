"use client"
import React, { Component } from 'react';
import SignatureCanvas  from 'react-signature-canvas'
import '../style/style.css'
class SignatureModal extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  state = { trimmedDataURL: null }
  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    const dataUrl = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
    this.props.hasOwnProperty('getSignUrl') && this.props.getSignUrl(dataUrl);
    this.setState({
      trimmedDataURL: dataUrl
    },()=> {
      this.clear();
      window.$('#exampleModal').modal('hide');
    })
  }

  render() {
    let { trimmedDataURL } = this.state
    return <div className="modal fade" id="exampleModal" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-blue2">
            <h5 className="modal-title" id="exampleModalLabel">Signature</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12 ">
                <div className="container-fluid p-0 m-0">
                  <div className="sigContainer">
                  <SignatureCanvas penColor='green'
                    canvasProps={{width: 400, height: 320, className: 'sigCanvas'}}  ref={(ref) => { this.sigPad = ref }} />
                  {/* <SignaturePad canvasProps={{className: 'sigPad'}}
                      ref={(ref) => { this.sigPad = ref }} /> */}
                  </div>
                  {/* {trimmedDataURL
                    ? <img className={styles.sigImage}
                      src={trimmedDataURL} />
                    : null} */}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={this.clear} type="button" className="btn btn-primary">Clear</button>
                <button onClick={this.trim} type="button" className="btn btn-success">Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SignatureModal;