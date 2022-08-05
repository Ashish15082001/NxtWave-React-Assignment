import styled from "styled-components";

export const TableTop = styled.div`
  margin-top: 3.6rem;
  display: flex;
  justify-content: space-between;
`;

export const TableTopTitle = styled.p`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: var(--color-dark-blue);
`;

export const TableTopLeft = styled.div``;

export const TableTopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TableTopRightSortContainer = styled.div`
  margin-left: 2.1rem;
  display: flex;
  align-items: center;

  & > p {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin-left: 0.9rem;
  }
`;
