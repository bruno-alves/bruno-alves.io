import React, { Component } from 'react';

import { Container, Menu } from './styles';
import Card from '../../components/Card';

import Games from '../../helpers/games';

export default class Main extends Component {
  state = { games: [] };

  componentDidMount() {
    this.setState({ games: Games });

    Games.forEach((game) => {
      new Image().src = game.config.unPressed;
      new Image().src = game.config.pressed;
    });
  }

  render() {
    const { games } = this.state;

    return (
      <Container>
        <Menu>
          {games.map((game) => (
            <li key={game.name}>
              <Card game={game} />
            </li>
          ))}
        </Menu>
      </Container>
    );
  }
}
