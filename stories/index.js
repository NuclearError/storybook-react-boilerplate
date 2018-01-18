import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import Button from '../components/Button';
import SearchApp from '../components/search-app';

/*
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
*/

storiesOf('SearchApp', module)
  .add('Just the default SearchApp', () => (
    <SearchApp />
  ));
