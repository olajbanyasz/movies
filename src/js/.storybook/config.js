import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

function loadStories () {
  require('../components/movie-title/MovieTitle_story');
}

configure(loadStories, module);