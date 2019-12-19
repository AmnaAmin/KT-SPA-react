import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import Recipe from '../components/Recipe'
import RecipeDetail from '../components/RecipeDetail'

configure({ adapter: new Adapter() })
let wrapper;
let wrapper2;
let onSubmitTitle = jest.fn()

beforeEach(() => {
  let data = {
    label: 'Chocolate cake',
    calories: '600',
    image: '/'
  }
  wrapper = mount(<Recipe data={data} callBack={onSubmitTitle} />)
}) 

test ('Check the Title click event', () => {
  const title = wrapper.find('p.header')
  expect(title).toBeTruthy()
  let titleClick = title.simulate('click')
  expect(titleClick).toBeTruthy()
  expect(onSubmitTitle).toHaveBeenCalled()
  expect(onSubmitTitle).toHaveBeenCalledTimes(1)
})

test ('If Recipe Details are being rendered', () => {
  wrapper2 = mount(<RecipeDetail onClosePopup={onSubmitTitle}/>)
 expect(wrapper2.exists('div.popUpBG')).toEqual(true)
 expect(wrapper2.exists('i.icon.close')).toEqual(true)
 let popupClose = wrapper2.find('i.icon.close')
 expect(popupClose).toBeTruthy()
 console.log('popupClose==>', popupClose)
 let popUpCloseClick = popupClose.simulate('click')
 expect(popUpCloseClick).toBeTruthy()
 expect(onSubmitTitle).toHaveBeenCalled()
 expect(onSubmitTitle).toHaveBeenCalledTimes(2)
})