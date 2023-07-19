import styled from "styled-components";

export const BeersList = styled.ul`
  top: 128px;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 90px;
`;

export const Block = styled.li`
  display: flex;
  flex-direction: row;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;
