import React from 'react';
import App from '../../../src/js/containers/app/App.jsx';
import { render } from 'enzyme';

describe('App', () => {
  it('should rendered correctly', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});