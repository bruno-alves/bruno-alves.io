import React, { Component } from 'react';
import Games from '../../games/config';

import { Container, Menu } from './styles';
import Card from '../../components/Card';

export default class Main extends Component {
  state = {
    games: [],
  };

  componentDidMount() {
    this.setState({ games: Games });
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
