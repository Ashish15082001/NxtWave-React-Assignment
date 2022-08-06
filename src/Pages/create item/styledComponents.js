import styled from "styled-components";
import image from "../../images/image9.png";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //   border: 1px solid red;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  //   background-color: var(--color-blue);
  background-image: url(${image});
  background-size: cover;
`;

export const BackNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;
  //   border: 1px solid red;
  margin-left: 4.8rem;
  margin-top: 2.2rem;

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
