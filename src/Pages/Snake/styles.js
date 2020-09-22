import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 5px;
  background: rgb(80, 80, 80);

  td {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .head {
    background: red;
  }

  .body {
    background: white;
  }

  .tail {
    background: yellow;
  }
`;
