import React from 'react'

class RecipeDetail extends React.Component {
   closePopupValue = e => this.props.onClosePopup(false)

    render() {
        return(
        <div className="showBox">
            <div className="popUpBG">
                <div className="ui displayModel">
                    <i className="close icon" onClick={this.closePopupValue}></i>
                    <div className="header">
                        Profile Picture
                    </div>
                    <div className="image content">
                        <div className="ui medium image">
                        <img src="/images/avatar/large/chris.jpg" alt="food chickens" />
                        </div>
                        <div className="description">
                        <div className="ui header">We've auto-chosen a profile image for you.</div>
                        <p>We've grabbed the following image from the gravatar image associated with your registered e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui black deny button">
                        Nope
                        </div>
                        <div className="ui positive right labeled icon button">
                        Yep, that's me
                        <i className="checkmark icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default RecipeDetail