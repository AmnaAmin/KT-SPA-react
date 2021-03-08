import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import Form from '../components/Form'

configure({ adapter: new Adapter() })
let formWrapper;
let onSubmitForm = jest.fn()

beforeEach(() => {
    formWrapper = mount(<Form callBack={onSubmitForm} />)
}) 

test('Change Input value of form', () => {
    formWrapper.setState({ value: 'rihana' })
    expect(formWrapper.state('value')).toEqual('rihana')
}) 

test('Click submit button after adding value', () => {
    const button = formWrapper.find('button')
    button.simulate('submit')
    expect(button).toBeTruthy()
    console.log('button', button.elements )
    expect(onSubmitForm).toHaveBeenCalledTimes(1)
}) 