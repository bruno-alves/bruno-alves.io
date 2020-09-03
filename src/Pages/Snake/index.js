import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [direction, setDirection] = useState('D');
  const [snake, setSnake] = useState([0, 1, 2]);

  const changeDirection = (e) => {
    switch (e.keyCode) {
      case 87:
        setDirection('W');
        break;
      case 65:
        setDirection('A');
        break;
      case 83:
        setDirection('S');
        break;
      case 68:
        setDirection('D');
        break;
    }
  };

  const move = (direction) => {
    setSnake(() => {});
  };

  useEffect(() => {
    document.addEventListener('keyup', changeDirection, false);

    const timer = setInterval(() => {
      move(direction);
    }, 1000);

    return () => clearInterval(timer);
  });

  const field = Array.from(Array(15), () => Array.from(Array(15)));
  return (
    <Table>
      <tbody />
    </Table>
  );
}

export default Snake;
