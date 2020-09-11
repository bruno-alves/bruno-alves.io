import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [snake, setSnake] = useState([0, 1, 2]);
  const [direction, setDirection] = useState('D');

  useEffect(() => {
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
        default:
      }
    };

    document.addEventListener('keydown', changeDirection);
    return () => document.removeEventListener('keydown', changeDirection);
  }, []);

  const setClassName = (x, y) => {
    const p = x * 15 + y;

    if (snake.includes(p)) {
      if (snake[0] === p) return 'tail';
      if (snake[snake.length - 1] === p) return 'head';

      return 'body';
    }

    return undefined;
  };

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
            default:
          }
        }
        return s[i + 1];
      })
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      move();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Table>
      <tbody>
        {Array.from(Array(15)).map((_, x) => (
          <tr key={x.toString()}>
            {Array.from(Array(15)).map((__, y) => (
              <td key={y.toString()} className={setClassName(x, y)} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
