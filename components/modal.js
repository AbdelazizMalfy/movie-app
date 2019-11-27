import React from 'react';

class Modal extends React.Component {

    constructor(props){
        super(props)
        this.closeButton = null
    }

    closeModal = () => {
        this.closeButton.click();
    }

    
    submitModal = ()=>{
        this.closeModal();
    }

    render(){
        return(
            <div className='wrapper'>
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">
                    Create Movie
                </button>
    
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
                <div className="modal-footer">
                  <button ref={(e) => this.closeButton = e} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  {
                    this.props.hasSubmit ? 
                     ''
                     : <button onClick={this.submitModal} type="button" className="btn       btn-primary">Save changes</button> 
                  }
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .wrapper{
                margin-top:50px;
            }
          `}</style>
        </div>
        )
    }
}

export default Modal