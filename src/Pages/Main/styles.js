import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(80, 80, 80);
  max-width: 650px;
  display: flex;
  border-radius: 10px;
  list-style-type: none;

  li {
    width: 110px;
    height: 115px;
    margin: 10px;
    border-radius: 10px;
  }
`;
