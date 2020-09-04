import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [direction, setDirection] = useState('D');
  const [snake, setSnake] = useState([0, 1, 2]);

  // Função que movimenta a snake dentro do array
  const move = () => {
    const s = [...snake];
    setSnake(
      s.map((_, i) => {
        if (s.length === i + 1) {
          switch (direction) {
            case 'W':
              return s[i] - 15;
            case 'A':
              return s[i] - 1;
            case 'S':
              return s[i] + 15;
            case 'D':
              return s[i] + 1;
          }
        }
        return s[i + 1];
      })
    );
  };

  // Função que muda a direção da snake
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

  // Adiciona a classe em cada TD da tabela
  const setClassName = (position) => {
    if (snake.includes(position)) return 'body';
    return undefined;
  };

  useEffect(() => {
    document.addEventListener('keyup', changeDirection, false);

    const timer = setInterval(() => {
      move();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Table>
      <tbody>
        {Array.from(Array(15), () => Array.from(Array(15))).map((tr, x) => (
          <tr key={x.toString()}>
            {tr.map((_, y) => (
              <td key={y.toString()} className={setClassName(x * 15 + y)} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
