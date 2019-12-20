import React from 'react'
class Recipe extends React.Component {
    state = { showDetailClass : true}

    onSubmitTitle = e => {
        e.preventDefault()
        this.props.callBack(true, this.props.data)
    }

    render () {
        let {label, calories, image, ingredients} = this.props.data
        ingredients = ingredients.length
        return (
          <div className='four wide column'>
            <div className='ui card'>
              <div className='image'>
                <img src={image} alt={label} />
              </div>
              <div className='content'>
                <p className='header ellipsis'>{label}</p>
                <div className='meta'>
                  <span className='right floated'>
                    calories: {Math.floor(calories)}
                  </span>
                  <span>Ingredients: {ingredients} </span>
                </div>
              </div>
              <div
                id='viewDetail'
                className='extra content viewDetail'
                onClick={this.onSubmitTitle}
              >
                <span>View Details</span>
              </div>
            </div>
          </div>
        )
    }
}
export default Recipe