import React from 'react';
import Sorter from '../../../src/js/components/sorter/Sorter.jsx';
import { render } from 'enzyme';

describe('Sorter', () => {
  it('should rendered correctly', () => {
    const component = render(<Sorter sortby={'DATE'} changeHandler={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});