import React, { useState, useEffect } from 'react';

import { Container, Table } from './styles';

function Miniswepper() {
  const [field, setField] = useState();

  // Inicializando configurações iniciais
  const init = () => {
    setField(
      Array(15).fill(
        Array(15).fill({
          number: undefined,
          isBomb: false,
          isEmpty: false,
        })
      )
    );
  };

  // Carregando configurações iniciais ao chamar a pagina do jogo
  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Table />
    </Container>
  );
}

export default Miniswepper;
