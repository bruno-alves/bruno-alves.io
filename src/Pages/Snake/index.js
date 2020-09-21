import React, { useState, useEffect, useRef } from 'react';
import { Table } from './styles';

function Snake() {
  const direction = useRef('D');
  const [newDirection, setNewDirection] = useState('D');
  const [snake, setSnake] = useState([
    { class: 'tail', position: 0 },
    { class: 'body', position: 1 },
    { class: 'head', position: 2 },
  ]);

  useEffect(() => {
    const changeDirection = (e) => {
      switch (e.keyCode) {
        case 87:
          if (direction.current !== 'S') setNewDirection('W');
          break;
        case 65:
          if (direction.current !== 'D') setNewDirection('A');
          break;
        case 83:
          if (direction.current !== 'W') setNewDirection('S');
          break;
        case 68:
          if (direction.current !== 'A') setNewDirection('D');
          break;
        default:
      }
    };

    document.addEventListener('keydown', changeDirection, false);
    return () => document.removeEventListener('keydown', changeDirection);
  }, [newDirection]);

  const move = () => {
    const s = [...snake];

    for (let i = 0; i < s.length; i += 1) {
      if (i !== s.length - 1) s[i].position = s[i + 1].position;
      else
        switch ((direction.current = newDirection)) {
          case 'W':
            s[i].position -= 15;
            break;
          case 'A':
            s[i].position -= 1;
            break;
          case 'S':
            s[i].position += 15;
            break;
          case 'D':
            s[i].position += 1;
            break;
          default:
            throw new Error('invalid direction');
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
    <Table>
      <tbody>
        {new Array(15).fill().map((_, y) => (
          <tr key={y.toString()}>
            {new Array(15).fill().map((__, x) => (
              <td
                key={x.toString()}
                className={snake.find((s) => s.position === 15 * y + x)?.class}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
