import Form from './Form';
import React from 'react';
import { shallow } from 'enzyme';

describe('Form Validation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  }),

  it('validate for items less than 10 characters', () => {
    const text_input = wrapper.find('input').first();
    text_input.simulate('change', {
      target: { value: 'text' }
    });
  })

  it('validate for items over 20 characters', () => {
    const text_input = wrapper.find('input').first();
    text_input.simulate('change', {
      target: { value: 'this item text in list is very long' }
    });
  })

});
