import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [direction, setDirection] = useState('D');
  const [snake, setSnake] = useState(() => {
    const s = Array.from(Array(15), () => Array.from(Array(15)));
    s[0][0] = 'tail';
    s[0][1] = 'body';
    s[0][2] = 'head';

    return s;
  });

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
    setSnake(() => {
      const s = [...snake];
      s[0][0] = undefined;
      s[0][1] = 'tail';
      s[0][2] = 'body';
      s[0][3] = 'head';

      return s;
    });
  };

  useEffect(() => {
    // document.addEventListener('keyup', changeDirection, false);

    const timer = setInterval(() => {
      move(direction);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Table>
      <tbody>
        {snake.map((tr, a) => (
          <tr key={String(a)}>
            {tr.map((td, b) => (
              <td className={td} key={String(b)} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
