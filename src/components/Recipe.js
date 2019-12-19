import React from 'react'
import './Recipe.css'

class Recipe extends React.Component {
    state = { showDetailClass : true}

    onSubmitTitle = e => {
        e.preventDefault()
        this.props.callBack(true)
    }

    render () {
        const {label, calories, image} = this.props.data
        return (
            <div className="four wide column">
                <div className="ui card">
                    <div className="image">
                        <img src={image} alt={label} />
                    </div>
                    <div className="content">
                        <p className="header" onClick={this.onSubmitTitle}>{label}</p>
                        <div className="meta">
                        <span className="date">Joined in 2013</span>
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                        calories: {Math.floor(calories)}
                        </span>
                        <span>Ingredients: none </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recipe