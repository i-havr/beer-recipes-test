import styled from "styled-components";

export const BeersList = styled.ul`
  position: fixed;
  /* left: 100px; */
  top: 100px;
  height: 520px;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 64px auto 128px auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Block = styled.li`
  display: flex;
  flex-direction: row;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;
