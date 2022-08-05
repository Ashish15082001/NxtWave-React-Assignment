import styled from "styled-components";

export const ResourceDetailsBody = styled.div`
  margin-top: 2.4rem;
  // border: 1px solid var(--color-border-grey);
  max-width: 109.7rem;
  width: 95%;
  margin-inline: auto;
`;

export const BackNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;

  & > span {
    margin-right: 0.9rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-font-grey);
  }
`;
