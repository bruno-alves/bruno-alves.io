import React, { useState, useEffect, useRef } from 'react';
import { Table } from './styles';

function Snake() {
  const [snake, setSnake] = useState([]);
  const [direction, setDirection] = useState('D');

  useEffect(() => {
    setSnake([
      { class: 'tail', position: 0 },
      { class: 'body', position: 1 },
      { class: 'head', position: 2 },
    ]);

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

    document.addEventListener('keydown', changeDirection, false);
    return () => document.removeEventListener('keydown', changeDirection);
  }, []);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const move = () => {
    const s = [...snake];

    for (let i = 0; i < s.length; i += 1) {
      if (i !== s.length - 1) s[i].position = s[i + 1].position;
      else
        switch (direction) {
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
        }
    }

    setSnake(s);
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
