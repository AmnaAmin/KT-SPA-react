import React from 'react'
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: ''}
  }
  searchValEvent = e => this.setState({ value: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.callBack(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mt-5">
          <input 
            id='search-input'
            name='searchInput'
            type='text'
            placeholder='Type here to Search...'
            value={this.state.value}
            onChange={this.searchValEvent}
            className="form-control p-4"
          />
          <div className="input-group-append">
            <button 
              className="btn btn-success" 
              type="submit" 
              id='submit-button'
              name='submitButton'
              title="Submit">
                <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form

