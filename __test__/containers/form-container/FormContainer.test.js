import React from 'react';
import FormContainer from '../../../src/js/containers/form-container/FormContainer.jsx';
import { render, mount } from 'enzyme';

describe('FormContainer', () => {
  it('should rendered correctly', () => {
    const component = render
                        (
                          <FormContainer
                            movies={[]}
                            searchby={'TITLE'}
                            sortby={'DATE'}
                            changeHandler={() => {}}
                          />
                        );
    expect(component).toMatchSnapshot();
  });

  it('should call the changhanler prop on change event', () => {
    const mockHandler = jest.fn();
    const component = mount
                        (
                          <FormContainer
                            movies={[]}
                            searchby={'TITLE'}
                            sortby={'DATE'}
                            changeHandler={mockHandler}
                          />
                        );
    component.find('.search-by-genre input').hostNodes().simulate('change', {target: {value: 'GENRE'}});
    component.update();
    expect(component.props().changeHandler).toHaveBeenCalled();
  });
});