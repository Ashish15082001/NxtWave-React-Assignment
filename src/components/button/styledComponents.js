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
  cursor: pointer;

  &[data-type="primary"] {
    background-color: var(--color-blue);
    color: white;
  }
  &[data-type="success"] {
    background-color: var(--color-success);
    color: white;
  }
  &[data-type="error"] {
    background-color: var(--color-error);
    color: white;
  }

  &[disabled] {
    background-color: var(--color-border-grey);
    cursor: no-drop;
  }

  &[disabled]:hover {
    opacity: 1;
  }

  :hover {
    opacity: 0.8;
  }
`;
