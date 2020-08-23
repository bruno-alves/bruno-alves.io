import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Button from '../Button';

function Card({ name, color, unPressed, pressed }) {
  return (
    <Container color={color}>
      <span>{name}</span>
      <Button unPressed={unPressed} pressed={pressed} />
    </Container>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  unPressed: PropTypes.string.isRequired,
  pressed: PropTypes.string.isRequired,
};

export default Card;
