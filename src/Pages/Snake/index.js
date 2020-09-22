import React, { useState, useEffect, useRef } from 'react';
import { Container, Table } from './styles';

function Snake() {
  const currentDirection = useRef('D');
  const [direction, setDirection] = useState('D');
  const [snake, setSnake] = useState([
    { class: 'tail', position: 1 },
    { class: 'body', position: 2 },
    { class: 'head', position: 3 },
  ]);

  useEffect(() => {
    const changeDirection = (e) => {
      switch (e.keyCode) {
        case 87:
          if (currentDirection.current !== 'S') setDirection('W');
          break;
        case 65:
          if (currentDirection.current !== 'D') setDirection('A');
          break;
        case 83:
          if (currentDirection.current !== 'W') setDirection('S');
          break;
        case 68:
          if (currentDirection.current !== 'A') setDirection('D');
          break;
        default:
      }
    };

    document.addEventListener('keydown', changeDirection, false);
    return () => document.removeEventListener('keydown', changeDirection);
  }, [direction]);

  const move = () => {
    const s = [...snake];

    for (let i = 0; i < s.length; i += 1) {
      if (i !== s.length - 1) s[i].position = s[i + 1].position;
      else {
        let p = s[i].position;

        switch ((currentDirection.current = direction)) {
          case 'W':
            s[i].position = p > 31 ? (p -= 30) : 14 * 30 + p;
            break;
          case 'A':
            s[i].position = (p + 29) % 30 !== 0 ? (p -= 1) : (p += 29);
            break;
          case 'S':
            s[i].position = p < 421 ? (p += 30) : p - 14 * 30;
            break;
          case 'D':
            s[i].position = p % 30 !== 0 ? (p += 1) : (p -= 29);
            break;
          default:
            throw new Error('invalid direction');
        }
      }
    }

    setSnake(s);
  };

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => savedCallback.current();

      const timer = setInterval(tick, delay);
      return () => clearInterval(timer);
    }, [delay]);
  };

  useInterval(move, 100);

  return (
    <Container>
      <Table>
        <tbody>
          {new Array(15).fill().map((_, y) => (
            <tr key={y.toString()}>
              {new Array(30).fill().map((__, x) => (
                <td
                  key={x.toString()}
                  className={
                    snake.find((s) => s.position === 30 * y + x + 1)?.class
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Snake;
