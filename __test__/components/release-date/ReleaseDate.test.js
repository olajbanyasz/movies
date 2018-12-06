import React from 'react';
import ReleaseDate from '../../../src/js/components/release-date/ReleaseDate';
import { shallow } from 'enzyme';

describe('ReleaseDate', () => {
  it('should rendered correctly', () => {
    const component = shallow(<ReleaseDate releaseDate={'2018-12-04'} />);
    expect(component).toMatchSnapshot();
  });
});