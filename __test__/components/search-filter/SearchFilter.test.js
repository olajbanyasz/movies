import React from 'react';
import SearchFilter from '../../../src/js/components/search-filter/SearchFilter.jsx';
import { render } from 'enzyme';

describe('SearchFilter', () => {
  it('should rendered correctly', () => {
    const component = render(<SearchFilter searchby={'TITLE'} changeHandler={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});