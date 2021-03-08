import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import SingleEvent from '../components/SingleEvent'

configure({ adapter: new Adapter() })
let wrapper;
let openPopup = jest.fn()
let data = {
  id: '1908',
  facebook_page_url: 'Chocolate cake',
  name: '600',
  image_url: '/'
}

let eventData = [
  {
    id: '',
    datetime: '2021-03-12T19:00:00',
    venue: {
      location: "Live Stream",
      name: "The One Man Pardy with Ardalan",
      city: "",
      country: "",
      region: "",
      type: "Virtual",
      timezone: "America/Los_Angeles"
    },
    offers: [
      {
      status: "available",
      url: "https://www.bandsintown.com/l/102496841?app_id=12312&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=watch_live",
      type: "Watch Live"
      }
    ]
  }
]

beforeEach(() => {
  wrapper = mount(<SingleEvent event={eventData[0]} />)
}) 

test ('Check the Button click event', () => {
  const title = wrapper.find('button#viewDetail')
  expect(title).toBeTruthy()
  let titleClick = title.simulate('submit')
  expect(titleClick).toBeTruthy()
})

