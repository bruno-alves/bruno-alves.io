import styled from 'styled-components';

export const PlayButton = styled.button`
  background-image: url(${(props) =>
    props.isPressed
      ? require(`../../assets/${props.pressed}`)
      : require(`../../assets/${props.unPressed}`)});
  background-size: cover;
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 32.5px;
  border-radius: 50%;
`;
