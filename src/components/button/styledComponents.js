import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: grid;
  place-items: center;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 0.4rem;

  &[data-type="primary"] {
    background-color: var(--color-blue);
    color: white;
  }
`;
