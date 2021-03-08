import React from 'react'

class PopUp  extends React.Component {
   closePopupValue = e => this.props.onClosePopup(false)
    
    render () {
        let {status, url} = this.props.data
        return ( 
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Tickets</h5>
                        <button 
                            id="closeIcon"
                            type="button" 
                            className="close"
                            onClick={this.closePopupValue}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body d-flex text-center">
                        <div className="col">
                        <p>Status: {status} </p>
                        </div>
                        <div className="col">
                            <a 
                            href={url}
                            className="btn btn-success"
                            rel="noreferrer noopener" 
                            target="_blank"
                            >Goto Link</a>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={this.closePopupValue}
                            >Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopUp