import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  display: block;
  width: 100%;
  max-height: 150px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
