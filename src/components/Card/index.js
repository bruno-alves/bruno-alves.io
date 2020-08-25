import React from 'react';
// import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Container } from './styles';

function Card(props) {
  // const history = useHistory();
  const { game } = props;

  return (
    <Container colors={game.colors}>
      <span>{game.name}</span>
      <button
        type="button"
        aria-label="play"
        // onClick={() => history.push(game.name.replace(/ /g, ''))}
      />
    </Container>
  );
}

Card.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    colors: PropTypes.shape({
      card: PropTypes.string.isRequired,
      unPressedBorderButton: PropTypes.string.isRequired,
      unPressedButton: PropTypes.string.isRequired,
      pressedBorderButton: PropTypes.string.isRequired,
      pressedButton: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Card;
