import React, { useState, useEffect } from 'react';
import { Table } from './styles';

function Snake() {
  const [direction, setDirection] = useState('A');
  const [snake, setSnake] = useState(() => {
    const s = Array.from(Array(15), () => Array.from(Array(15)));
    s[0][0] = 'tail';
    s[0][1] = 'body';
    s[0][2] = 'head';

    return s;
  });

  const changeDirection = (e) => {
    console.log('keyUP');

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

  useEffect(() => {
    document.addEventListener('keyup', changeDirection, false);
  });

  return (
    <Table>
      {console.log(direction)}
      <tbody>
        {Array.from(Array(15).keys()).map((tr) => (
          <tr key={String(tr)}>
            {Array.from(Array(15).keys()).map((td) => {
              switch (snake[tr][td]) {
                case 'head':
                  return <td className="head" key={String(td)} />;
                case 'body':
                  return <td className="body" key={String(td)} />;
                case 'tail':
                  return <td className="tail" key={String(td)} />;
                default:
                  return <td key={String(td)} />;
              }
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
