import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* This is a simple 'dumb' component: it receives data ('content' prop) from the parent but does not send data anywhere. It just renders what it is given.  */
const Term = props => (
  <h1>
    {props.content}
  </h1>
);

Term.propTypes = {
  content: PropTypes.string.isRequired
};

export default Term;
