import styled from "styled-components";

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 32rem;
  width: 95%;
  margin-inline: auto;
  margin-top: 14.5rem;
`;

export const FormTitle = styled.p`
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 4rem;
  color: var(--color-dark-blue);
  text-align: center;
`;

export const FormLabel = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: var(--color-font-grey);
  margin-bottom: 0.8rem;
  margin-top: 3.2rem;
  width: 100%;
`;

export const FormInput = styled.input`
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

export const FormTextArea = styled.textarea`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-dark-blue);
  border: none;
  outline: none;
  backround-color: white;
  border: 0.1rem solid var(--color-border-grey);
  border-radius: 0.2rem;
  height: 8rem;
  margin-bottom: 4.8rem;
  width: 100%;
  resize: none;
  padding: 0.8rem 1.6rem;
`;

export const FormInputContainer = styled.div`
  width: 100%;
`;
