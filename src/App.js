import React from 'react';
import Loader from './components/Loader'
import Form from './components/Form'
import Recipe from './components/Recipe'
import RecipeDetail from './components/RecipeDetail'

// presets 
const APP_ID = 'd100a428'
const APP_KEY = 'ce491a16c576e944e820d344c062f9a7'
const Base_URL = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8&calories=591-722&health=alcohol-free`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      detailData: {},
      error: '',
      showDetailClass: false,
      
      loader: false
    }
    this.onShowPopup = this.onShowPopup.bind(this)
  }
  // methods
  onSubmitForm = value => {
    // Receives prop from AppForm
    this.setState({ loader: true })
    this.getData(value)
  }

  onShowPopup = (value, data) => {
    this.setState({ showDetailClass: value, detailData: data })
  }

  getData(q) {
    const setAPI = Base_URL + `&q=${q}`
    fetch(setAPI).then(res => {
      this.setState({ loader: false })
      res
        .json()
        .then(result => this.setState({ data: result.hits }))
        .catch(error => this.setState({ error }))
    })
  }

  componentDidMount() {
    this.onSubmitForm('chicken')
  }

  render() {
    return (
      <div>
        {/* <Loader /> */}
        {this.state.loader ? <Loader /> : ''}
        <div className='App ui grid container'>
          <Form callBack={this.onSubmitForm} />
          {this.state.data.map(rec => (
            <Recipe
              key={Math.random()}
              callBack={this.onShowPopup}
              data={rec.recipe}
            />
          ))}
        </div>
        {this.state.showDetailClass ? (
          <RecipeDetail
            key={Math.random()}
            onClosePopup={this.onShowPopup}
            data={this.state.detailData}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}
export default App;
