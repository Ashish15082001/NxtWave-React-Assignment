import styled from "styled-components";

export const ResourceItemList = styled.ul`
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 36rem);
  grid-template-rows: min-content;
  grid-auto-rows: 19.2rem;
  margin-inline: auto;
  width: fit-content;
  list-style: none;
  gap: 3.2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 36rem);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 36rem);
  }
`;

export const SearchBarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  // border: 1px solid red;

  @media only screen and (max-width: 1200px) {
    grid-column-end: 3;
  }

  @media only screen and (max-width: 800px) {
    grid-column-end: 2;
  }
`;

export const ResourceListItem = styled.li``;

export const Message = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-font-grey);
`;
