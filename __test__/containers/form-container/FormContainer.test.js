import React from 'react';
import FormContainer from '../../../src/js/containers/form-container/FormContainer.jsx';
import { render } from 'enzyme';

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
});