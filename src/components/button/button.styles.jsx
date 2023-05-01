import styled from 'styled-components';

export const BaseButton = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid black;
  background: transparent;
  color: white;
  padding: 10px 30px;
  font: inherit;
  transition: 0.2s all;

  &:hover {
    background: white;
    color: black;
    border: 1px solid white;
  }
`;
