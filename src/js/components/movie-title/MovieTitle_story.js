import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieTitle from './MovieTitle.jsx';

storiesOf('MovieTitle', module)
  .addWithJSX('with text', () => (<MovieTitle />));