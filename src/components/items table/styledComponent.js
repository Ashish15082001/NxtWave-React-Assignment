import styled from "styled-components";

export const TableTop = styled.div`
  margin-top: 3.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
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
  width: 64.8rem;
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

// TABLE

export const Table = styled.table`
  border: 0.1rem solid var(--color-border-grey);
  border-radius: 0.7rem;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableHeader = styled.th`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: left;
  color: var(--color-font-grey);
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  // border-block: 1px solid var(--color-border-grey);
  display: block;
  padding: 2rem;
  display: grid;
  grid-template-columns: 13rem 23.3rem 33rem 1fr;
`;

export const TableData = styled.td`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-font-grey);
  padding-right: 3rem;
  // border: 1px solid red;
`;