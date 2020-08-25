import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 110px;
  height: 95px;
  border-radius: 10px;
  background-color: rgb(${(props) => props.colors.card});

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

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  button {
    background-image: url(${require('../../assets/icon-play.png')});
    background-color: rgb(${(props) => props.colors.unPressedButton});
    background-size: 55px 55px;
    background-repeat: no-repeat;
    cursor: pointer;
    border: 6px solid rgb(${(props) => props.colors.unPressedBorderButton});
    padding: 25px;
    border-radius: 50%;
    outline: none;

    &:active {
      background-color: rgb(216, 54, 45);
      background-size: 40px 40px;
      background-position-x: 6px;
      background-position-y: 6px;
      border: 11px solid rgb(249, 98, 132);
      padding: 25px;
    }
  }
`;
