import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Container } from './styles';

function Card(props) {
  const history = useHistory();
  const { game } = props;

  return (
    <Container colors={game.colors}>
      <span>{game.name}</span>
      <button
        type="button"
        aria-label="play"
        onClick={() => history.push(game.name.replace(/ /g, ''))}
      >
        <img src={require('../../assets/play.png')} alt="play" draggable="false" />
      </button>
    </Container>
  );
}

Card.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colors: PropTypes.shape({
      card: PropTypes.string.isRequired,
      gradientStart: PropTypes.string.isRequired,
      gradientEnd: PropTypes.string.isRequired,
      unPressedBorder: PropTypes.string.isRequired,
      pressedBorder: PropTypes.string.isRequired,
      shadown: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Card;
