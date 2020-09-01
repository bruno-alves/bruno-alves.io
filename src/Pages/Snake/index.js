import React, { useState } from 'react';
import { Table } from './styles';

function Snake() {
  const [snake, setSnake] = useState(
    Array.from(Array(15), () => Array.from(Array(15)))
  );

  setSnake(() => {
    const old = [...snake];
    old[0][0] = 'tail';
    old[0][1] = 'body';
    old[0][2] = 'head';

    return old;
  }, snake);

  return (
    <Table>
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
