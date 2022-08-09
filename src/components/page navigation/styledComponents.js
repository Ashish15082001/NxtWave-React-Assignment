import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
`;

export const NavigationIconContainer = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.2rem;
  cursor: pointer;
  border: 0.1rem solid var(--color-border-grey);
  margin-left: 0.8rem;
`;

export const PageNumberNavigationList = styled.ul`
  list-style: none;
  display: flex;s
`;
export const PageNumberNavigationListItem = styled.li`
  height: 2.4rem;
  width: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.2rem;
  cursor: pointer;
  border: 0.1rem solid var(--color-border-grey);
  margin-left: 0.8rem;

  &[data-isactive="true"] {
    border: 0.1rem solid var(--color-dark-blue);
  }
`;
