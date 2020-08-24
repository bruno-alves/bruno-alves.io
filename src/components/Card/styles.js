import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 110px;
  height: 95px;
  border-radius: 10px;
  background-color: rgb(${(props) => props.config.rgb});

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

  button {
    background-image: url('${(props) => props.image}');
    background-size: cover;
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 32.5px;
    border-radius: 50%;
  }
`;
