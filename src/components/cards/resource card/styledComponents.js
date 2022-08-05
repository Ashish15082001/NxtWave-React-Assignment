import styled from "styled-components";

export const CardBody = styled.div`
  background-color: white;
  border: 1px solid var(--color-border-grey);
  padding: 2.4rem;
  border-radius: 0.4rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const CardUpper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const CardCategory = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: var(--color-font-grey);
`;

export const CardUpperLeft = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 0.4rem;
  overflow: hidden;
  margin-right: 1.6rem;
  border: 0.2rem solid var(--color-border-grey);
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const CardUpperRight = styled.div``;

export const CardLower = styled.div``;

export const CardLowerLink = styled.a`
  margin-top: 2rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;
  color: var(--color-blue);
`;

export const CardLowerDescription = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-font-grey);
`;
