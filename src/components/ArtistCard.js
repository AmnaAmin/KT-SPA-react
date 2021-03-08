import React from 'react'
import SingleEvent from './SingleEvent'
import NoEvent from './NoEvent'

class ArtistCard  extends React.Component {
    
    render () {
        let {name, facebook_page_url, image_url, upcoming_event_count} = this.props.data
        return (
            <div className="card mt-5">
                <div className="card-header">
                    <img src={image_url} alt={name} />
                    <div className="
                        d-flex 
                        artist_name h-100 
                        justify-content-md-around 
                        text-uppercase 
                        align-items-end align-items-md-center 
                        flex-column flex-md-row" >
                            <p className="a_name"> {name}</p>
                            <p className="follow_me">
                                <a 
                                    href={facebook_page_url} 
                                    rel="noreferrer noopener" 
                                    target="_blank">
                                <i className="fab fa-facebook-square mr-2"></i>
                                Follow me on fb</a>
                            </p>
                            <p className="events_c">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                Upcoming Event 
                                <span className="mr-1">{upcoming_event_count} </span> 
                            </p>
                    </div>
                </div>

                <div className="card-body row">
                    <div className="artist_image col-3">
                        <img className="img-fluid" src={image_url} alt={name}/>
                    </div>
                    <div className="artist_events col-9">
                        <ul>
                            {this.props.detailed.length ? (this.props.detailed.map((event, i) => (
                            <SingleEvent 
                                key={i}
                                event={event}  />)))
                            : <NoEvent />
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistCard
