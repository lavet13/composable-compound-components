import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 30px;
  background: #777;
  border-radius: 10px;
  min-height: 200px;
  padding-bottom: 20px;
`;

export const ProductCardImageContainer = styled.div`
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

export const ProductCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;
