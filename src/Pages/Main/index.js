import React, { Component } from 'react';

import { Container, Menu } from './styles';
import Card from '../../components/Card';

export default class Main extends Component {
  state = {
    games: [
      {
        name: 'snake',
        color: 'rgb(255, 88, 88)',
        unPressed: 'playRed.png',
        pressed: 'pressedRed.png',
      },
      {
        name: 'tic tac toe',
        color: 'rgb(119, 222, 119)',
        unPressed: 'playGreen.png',
        pressed: 'pressedGreen.png',
      },
      {
        name: 'mini swepper',
        color: 'rgb(186, 108, 245)',
        unPressed: 'playPurple.png',
        pressed: 'pressedPurple.png',
      },
      {
        name: 'genius',
        color: 'rgb(111, 111, 255)',
        unPressed: 'playBlue.png',
        pressed: 'pressedBlue.png',
      },
      {
        name: 'tetris',
        color: 'rgb(255, 190, 71)',
        unPressed: 'playOrange.png',
        pressed: 'pressedOrange.png',
      },
    ],
  };

  render() {
    const { games } = this.state;

    return (
      <Container>
        <Menu>
          {games.map((game) => (
            <li key={game.name}>
              <Card
                name={game.name}
                color={game.color}
                unPressed={game.unPressed}
                pressed={game.pressed}
              />
            </li>
          ))}
        </Menu>
      </Container>
    );
  }
}
