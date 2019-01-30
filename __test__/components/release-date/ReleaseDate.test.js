import React from 'react';
import { shallow } from 'enzyme';
import ReleaseDate from '../../../src/js/components/release-date/ReleaseDate';

describe('ReleaseDate', () => {
  it('should rendered correctly', () => {
    const component = shallow(<ReleaseDate releaseDate={'2018-12-04'} />);
    expect(component).toMatchSnapshot();
  });
});
