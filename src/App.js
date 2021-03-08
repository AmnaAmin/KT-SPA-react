import React from 'react';
import Form from './components/Form'
import Loader from './components/Loader'
import ArtistCard from './components/ArtistCard'


// presets 
const Base_URL = `https://rest.bandsintown.com/artists/`
const APP_ID = '?app_id=12312'
const Events = '/events'
const noValueText = "Input Cant be empty"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: false,
      data: [],
      events: '',
      error: '',
      showDetailClass: false,
      eventDetail: [],
      noValue: false
    }
  }
  // methods
  onSubmitForm = value => {
    // Receives prop from Form
    this.setState({ loader: true })
    this.getData(value)
  }

  getData(q) {
    const setAPI =  Base_URL + `${q}` + APP_ID
    if (q === '') {
      this.setState({noValue: true, loader: false})
    } else {
      fetch(setAPI).then(res => {
        this.setState({ loader: false })
        res
            .json()
            .then(result => this.setState({ data: result, noValue: false}))
            .catch(error => this.setState({ error }))
        })
        this.getEvents(q)
    }
  }

  getEvents(q) {
    const setAPI =  Base_URL + `${q}` + Events + APP_ID 
    fetch(setAPI).then(res => {
      res
        .json()
        .then(result => { return this.setState({ eventDetail: result }) })
        .catch(error => this.setState({ error }))
    })
  }

  componentDidMount() {
    this.onSubmitForm('chai')
  }
  render() {
      return (
          <div>
            {this.state.loader ? <Loader /> : ''}
              <div className="container">
                <Form callBack={this.onSubmitForm} />
                {this.state.noValue ? 
                    <div>{noValueText} </div>
                    : ''
                }
                <ArtistCard 
                    key={Math.random()}
                    data={this.state.data}
                    detailed={this.state.eventDetail}
                />
               
              </div>
          </div>
      )
  }
}


export default App;
