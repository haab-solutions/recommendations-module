/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import SavedListEntry from '../client/components/SavedListEntry';

describe('SavedListEntry Component', () => {
  const listName = 'test string';
  const favorited = false;

  const wrapper = shallow(<SavedListEntry listName={listName} favorited={favorited} />);


  it.only('should render the list name', () => {
    expect(wrapper.find('ListEntry').text()).toContain('test string');
  });

  it.only('should render a heart', () => {
    expect(wrapper.find('Heart').exists());
  });
});