import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Container } from './styles';

function Card(props) {
  const [isPressed, setPressed] = useState(false);
  const { game } = props;
  const history = useHistory();

  return (
    <Container
      config={game.config}
      image={isPressed ? game.config.pressed : game.config.unPressed}
    >
      <span>{game.name}</span>
      <button
        type="button"
        aria-label="play"
        onMouseDown={(e) => {
          if (e.nativeEvent.which === 1) setPressed(true);
        }}
        onMouseUp={(e) => {
          if (e.nativeEvent.which === 1) setPressed(false);
        }}
        onClick={() => history.push(game.name.replace(/ /g, ''))}
      />
    </Container>
  );
}

Card.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    config: PropTypes.shape({
      rgb: PropTypes.string.isRequired,
      unPressed: PropTypes.string.isRequired,
      pressed: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Card;
