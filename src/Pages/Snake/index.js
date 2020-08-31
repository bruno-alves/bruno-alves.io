import React, { useState } from 'react';
import { Table } from './styles';

function Snake() {
  const [config] = useState({ ammountTR: 15, ammountTD: 15 });
  const [snake, setSnake] = useState(
    Array.from(Array(config.ammountTR), () =>
      Array.from(Array(config.ammountTD))
    )
  );

  console.log(snake);

  return (
    <Table>
      <tbody>
        {Array.from(Array(config.ammountTR).keys()).map((i) => (
          <tr key={String(i)}>
            {Array.from(Array(config.ammountTD).keys()).map((d) => {
              return <td key={String(d)} className="tail" />;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Snake;
