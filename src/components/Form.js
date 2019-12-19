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
    this.setState({ value: '' })
  }

  render() {
    return (
      <form className='sixteen wide column' onSubmit={this.handleSubmit}>
        <div className='ui fluid action input'>
          <input
            id='search-input'
            name='searchInput'
            type='text'
            placeholder='Search...'
            value={this.state.value}
            onChange={this.searchValEvent}
          />
           {this.state.value}
          <button
            id='submit-button'
            name='submitButton'
            className='ui button'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default Form

