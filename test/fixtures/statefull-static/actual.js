import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Example extends Component {
  static handledProps = ['className'];

  static defaultProps = {
    active: true
  };

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return null;
  }
}
