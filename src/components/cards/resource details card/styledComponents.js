import styled from "styled-components";

export const DetailCard = styled.div`
  margin-bottom: 3.6rem;
`;

export const DetailCardUpper = styled.div`
  display: flex;
  align-items: flex-start;
  //   border: 1px solid red;
`;

export const DetailCardUpperLeft = styled.div`
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 3.2rem;
  border: 0.2rem solid var(--color-border-grey);
  overflow: hidden;
  margin-right: 1.6rem;
`;

export const DetailCardUpperRight = styled.div``;

export const DetailCardLower = styled.div``;

export const DetailCardTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: var(--color-dark-blue);
`;

export const DetailCardImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const DetailCardLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-blue);
`;

export const DetailCardItemsLength = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-font-grey);
`;

export const DetailCardDescription = styled.p`
  margin-top: 0.8rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-font-grey);
`;
