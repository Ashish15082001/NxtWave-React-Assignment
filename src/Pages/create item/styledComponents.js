import styled from "styled-components";
import image from "../../images/image9.png";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //   border: 1px solid red;
`;

export const LeftContainer = styled.div``;

export const CreateItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 32rem;
  width: 95%;
  margin-inline: auto;
  margin-top: 14.5rem;
`;

export const CreateItemFormTitle = styled.p`
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 4rem;
  color: var(--color-dark-blue);
  text-align: center;
`;

export const CreateItemFormLabel = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: var(--color-font-grey);
  margin-bottom: 0.8rem;
  margin-top: 3.2rem;
  width: 100%;
`;

export const CreateItemFormInput = styled.input`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-dark-blue);
  border: none;
  outline: none;
  bacground-color: white;
  padding: 0.8rem 1.6rem;
  border: 0.1rem solid var(--color-border-grey);
  border-radius: 0.2rem;
  width: 100%;
`;

export const CreateItemFormTextArea = styled.input`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-dark-blue);
  border: none;
  outline: none;
  bacground-color: white;
  border: 0.1rem solid var(--color-border-grey);
  border-radius: 0.2rem;
  height: 8rem;
  margin-bottom: 4.8rem;
  width: 100%;
`;

export const CreateItemFormInputContainer = styled.div``;

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
