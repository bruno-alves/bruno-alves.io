import React, { useState, useEffect, useRef } from 'react';
import { Container, Table } from './styles';

function Snake() {
  const [snake, setSnake] = useState();
  const [direction, setDirection] = useState();
  const [foodPosition, setFoodPosition] = useState();

  // Inicializando a snake e a direção
  useEffect(() => {
    setSnake([
      { class: 'tail', position: 1 },
      { class: 'body', position: 2 },
      { class: 'body', position: 3 },
      { class: 'body', position: 4 },
      { class: 'body', position: 5 },
      { class: 'body', position: 6 },
      { class: 'body', position: 7 },
      { class: 'body', position: 8 },
      { class: 'body', position: 9 },
      { class: 'body', position: 10 },
      { class: 'body', position: 11 },
      { class: 'body', position: 12 },
      { class: 'body', position: 13 },
      { class: 'body', position: 14 },
      { class: 'body', position: 15 },
      { class: 'body', position: 16 },
      { class: 'head', position: 17 },
    ]);

    setDirection({ current: 'D', next: 'D' });
    setFoodPosition(Math.floor(Math.random() * 446) + 4);
  }, []);

  // Adicionado evento de mudança de direção
  useEffect(() => {
    const changeDirection = (e) => {
      const { current } = direction;

      switch (e.keyCode) {
        // Tecla, fecha para cima e W
        case 38:
        case 87:
          if (direction.current !== 'S') setDirection({ current, next: 'W' });
          break;
        // Tecla, fecha para direita e A
        case 37:
        case 65:
          if (direction.current !== 'D') setDirection({ current, next: 'A' });
          break;
        // Tecla, fecha para baixo e S
        case 40:
        case 83:
          if (direction.current !== 'W') setDirection({ current, next: 'S' });
          break;
        // Tecla, fecha para esquerda e D
        case 39:
        case 68:
          if (direction.current !== 'A') setDirection({ current, next: 'D' });
          break;
        default:
      }
    };

    document.addEventListener('keydown', changeDirection, false);
    return () => document.removeEventListener('keydown', changeDirection);
  }, [direction]);

  // Função que movimenta a snake dentro do array
  const move = () => {
    const s = [...snake];

    for (let i = 0; i < s.length; i += 1) {
      // Movimentando a cauda e o corpo
      if (i !== s.length - 1) s[i].position = s[i + 1].position;
      // Movimentando a cabeça
      else {
        let p = s[i].position;

        switch (direction.next) {
          case 'W':
            s[i].position = p > 30 ? (p -= 30) : 30 * 14 + p;
            break;
          case 'A':
            s[i].position = (p + 29) % 30 !== 0 ? (p -= 1) : (p += 29);
            break;
          case 'S':
            s[i].position = p < 421 ? (p += 30) : p - 30 * 14;
            break;
          case 'D':
            s[i].position = p % 30 !== 0 ? (p += 1) : (p -= 29);
            break;
          default:
            throw new Error('invalid direction');
        }
      }
    }

    // Verificando colisão com a comida
    if (s[s.length - 1].position === foodPosition) {
      setFoodPosition(Math.floor(Math.random() * 446) + 4);
    }

    setSnake(s);
    setDirection((state) => {
      return { current: state.next, next: state.next };
    });
  };

  // Função que executa o movimento da snake depois de um determinado tempo
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

  // Função que adiciona a classe conforme o numero da TD
  const setClassName = (x, y) => {
    const p = 30 * y + x + 1;

    if (foodPosition === p) return 'food';

    return snake?.find((s) => s.position === 30 * y + x + 1)?.class;
  };

  useInterval(move, 75);

  return (
    <Container>
      <Table>
        <tbody>
          {new Array(15).fill().map((_, y) => (
            <tr key={y.toString()}>
              {new Array(30).fill().map((__, x) => (
                <td key={x.toString()} className={setClassName(x, y)} />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Snake;
