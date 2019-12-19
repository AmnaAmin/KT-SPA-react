import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import Recipe from '../components/Recipe'
import RecipeDetail from '../components/RecipeDetail'

configure({ adapter: new Adapter() })
let wrapper;
let wrapper2;
let onSubmitTitle = jest.fn()
let data = {
  label: 'Chocolate cake',
  calories: '600',
  image: '/',
  ingredients: [],
  cautions: [],
  source: '',
  url: '/'
}

beforeEach(() => {
  wrapper = mount(<Recipe data={data} callBack={onSubmitTitle} />)
}) 

test ('Check the Title click event', () => {
  const title = wrapper.find('div#viewDetail')
  expect(title).toBeTruthy()
  let titleClick = title.simulate('click')
  expect(titleClick).toBeTruthy()
  expect(onSubmitTitle).toHaveBeenCalled()
  expect(onSubmitTitle).toHaveBeenCalledTimes(1)
})

test ('If Recipe Details are being rendered', () => {
  wrapper2 = mount(<RecipeDetail onClosePopup={onSubmitTitle} data={data} />)
 expect(wrapper2.exists('div#modal')).toEqual(true)
 expect(wrapper2.exists('i#closeIcon')).toEqual(true)
 let popupClose = wrapper2.find('i#closeIcon')
 expect(popupClose).toBeTruthy()
 let popUpCloseClick = popupClose.simulate('click')
 expect(popUpCloseClick).toBeTruthy()
 expect(onSubmitTitle).toHaveBeenCalled()
 expect(onSubmitTitle).toHaveBeenCalledTimes(2)
})