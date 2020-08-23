import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PlayButton } from './styles';

export default class Button extends Component {
  static propTypes = {
    unPressed: PropTypes.string.isRequired,
    pressed: PropTypes.string.isRequired,
  };

  state = {
    isPressed: false,
  };

  handleMouseDown = (e) => {
    if (e.nativeEvent.which === 1) this.setState({ isPressed: true });
  };

  handleMouseUp = (e) => {
    if (e.nativeEvent.which === 1) this.setState({ isPressed: false });
  };

  render() {
    const { unPressed, pressed } = this.props;
    const { isPressed } = this.state;

    return (
      <PlayButton
        isPressed={isPressed}
        unPressed={unPressed}
        pressed={pressed}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      />
    );
  }
}
