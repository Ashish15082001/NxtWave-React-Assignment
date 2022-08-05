import styled from "styled-components";

export const NavigationBody = styled.nav`
  margin-top: 4.6rem;
  width: fit-content;
  height: fit-content;
  margin-inline: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 0.15rem solid var(--color-border-grey);
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavigationListItem = styled.li`
  background-color: var(--color-dark-grey);
  font-size: 1.4rem;
  height: 4rem;
  width: 20rem;
  display: grid;
  place-items: center;
  color: var(--color-dark-blue);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:nth-child(2) {
    border-inline: 0.15rem solid var(--color-border-grey);
  }

  &[data-active="true"] {
    background-color: var(--color-blue);
    color: white;
  }

  @media only screen and (max-width: 800px) {
      width: 11.9rem;
  }
`;
