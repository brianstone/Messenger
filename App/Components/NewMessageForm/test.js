import React, {Text, TextInput, TouchableHighlight} from 'react-native';
import {shallow} from 'enzyme';
import NewMessageForm from './index.js';
import {expect} from 'chai';

describe('<NewMessageForm />', () => {
  it('should render NewMessageForm', () => {
    const component = shallow(<NewMessageForm />);
    expect(component).to.exists
  });
});


