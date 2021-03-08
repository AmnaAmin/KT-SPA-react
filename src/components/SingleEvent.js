import React from 'react'
import PopUp from './PopUp'

class SingleEvent  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPop: false,
            data: {}
        }
    }
    openPopup = () => {
        this.setState({data: this.props.event.offers[0], showPop: true})
    }
    closePopup = () => {
        this.setState({showPop: false})
    }
    render () {
        let {venue, datetime} = this.props.event
        return (
            <li>
                <div className="row align-items-center">
                    <div className="col-3 e_name">{venue.name}</div>
                    <div className="col-3 e_location text-center">
                        <i className="fas fa-map-marker-alt icon"></i>
                        <p>{venue.location}</p>
                    </div>
                    <div className="col-3 e_time text-center">
                        <i className="fas fa-clock icon"></i>
                        <p>{datetime}</p>
                    </div>
                    <div className="col-3 text-right">
                        <button
                            type="submit"
                            id="viewDetail"
                            className="btn btn-outline-success"
                            onClick={this.openPopup}
                            disabled={this.props.event.offers.length === 0}
                            >Check Tickets </button>
                            {this.state.showPop 
                            ? <PopUp 
                                data={this.state.data}
                                onClosePopup={this.closePopup} /> 
                            : ""}
                    </div>
                </div>
            </li>
        )
    }

}

export default SingleEvent