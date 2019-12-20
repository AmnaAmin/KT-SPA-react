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
        <div className='ui fluid action input paddingTop'>
          <input
            id='search-input'
            name='searchInput'
            type='text'
            placeholder='Type here to Search...'
            value={this.state.value}
            onChange={this.searchValEvent}
          />

          <button
            id='submit-button'
            name='submitButton'
            className='ui button teal'
            type='submit'
            title="Submit"
          >
            <i className='search icon'></i>
          </button>
        </div>
      </form>
    )
  }
}

export default Form

