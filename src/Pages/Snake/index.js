import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [snake, setSnake] = useState([0, 1, 2]);
  const [direction, setDirection] = useState('D');

  /*
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
  */

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

  const setClassName = (position) => {
    if (snake[0] === position) return 'tail';
    if (snake[snake.length - 1] === position) return 'head';

    return snake.includes(position) ? 'body' : undefined;
  };

  useEffect(() => {
    document.addEventListener('keydown', changeDirection);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 1000);

    return () => clearTimeout(timer);
  }, [snake]);

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
