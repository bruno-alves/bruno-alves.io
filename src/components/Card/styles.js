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
    background-image: linear-gradient(
      -55deg,
      rgb(${(props) => props.colors.gradientEnd}),
      rgb(${(props) => props.colors.gradientStart})
    );
    cursor: pointer;
    padding: 3px;
    border-radius: 50%;
    border: 7px solid rgb(${(props) => props.colors.unPressedBorder});
    box-shadow: -3px -3px rgb(${(props) => props.colors.shadown}) inset;
    outline: none;

    &:active {
      background: linear-gradient(
        -55deg,
        rgb(${(props) => props.colors.gradientStart}),
        rgb(${(props) => props.colors.gradientEnd})
      );
      padding: 6px;
      border: 9px solid rgb(${(props) => props.colors.pressedBorder});
      box-shadow: 3px 3px rgb(${(props) => props.colors.shadown}) inset;

      img {
        width: 35px;
        height: 35px;
      }
    }

    img {
      display: flex;
      width: 45px;
      height: 45px;
    }
  }
`;
