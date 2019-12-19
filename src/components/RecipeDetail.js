import React from 'react'

class RecipeDetail extends React.Component {
   closePopupValue = e => this.props.onClosePopup(false)

    render() {
        let {
          label,
          image,
          calories,
          cautions,
          ingredients,
          source,
          url
        } = this.props.data
         calories = Math.floor(calories)
        // console.log('props==>', this.props.data)

        return (
          <div className='showBox'>
            <div id="modal" className='ui dimmer loaderBg modals page transition active'>
              <div className='ui standard test modal transition visible active block'>
                <i id="closeIcon" className='close icon' onClick={this.closePopupValue}></i>
                <div className='header teal'>{label}</div>
                <div className='scrolling image content'>
                  <div className='ui medium image'>
                    <img src={image} alt={label} />
                    <div className='additionalBox'>
                      <span>Calories</span><span className='floatRight'>{calories}</span>
                    </div>
                    <div className='additionalBox'>
                      <p>Cautions</p>
                      <p>{cautions.map(item => <span key={Math.random()} className="tag">{item}</span>)}</p>
                    </div>
                  </div>
                  <div className='description'>
                    <div className='ui header'>Ingredients</div>
                    {ingredients.map(rec => (<p key={Math.random()}>{rec.text}</p>))}
                    <p className='floatRight'>
                      <i>
                        Source: <span><a href={url} target="_blank" rel="noopener noreferrer"> {source} </a> </span>
                      </i>
                    </p>
                  </div>
                </div>
                <div className='actions'>
                  <button
                    className='ui deny button'
                    onClick={this.closePopupValue}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default RecipeDetail