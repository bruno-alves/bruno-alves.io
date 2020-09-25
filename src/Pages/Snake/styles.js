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
    background: rgb(247, 59, 59);
  }

  .body {
    background: rgb(179, 107, 216);
  }

  .tail {
    background: rgb(105, 171, 228);
  }

  .food {
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    0% {
      transform: scale(0.8);
      background-color: green;
    }
    50% {
      transform: scale(1);
      background-color: lightgreen;
      opacity: 0.5;
    }
    100% {
      transform: scale(0.8);
      background-color: green;
    }
  }
`;
