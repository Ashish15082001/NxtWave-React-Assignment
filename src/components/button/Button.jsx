import { StyledButton } from "./styledComponents";

export function Button({ type, text, onClick, disabled }) {
  return (
    <StyledButton onClick={onClick} data-type={type} disabled={disabled}>
      {text}
    </StyledButton>
  );
}
