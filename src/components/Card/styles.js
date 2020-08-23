import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 110px;
  height: 95px;
  border-radius: 10px;
  background-color: ${(props) => props.color};

  span {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 110px;
    height: 55px;
    font-family: 'calibri';
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
