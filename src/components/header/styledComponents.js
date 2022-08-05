import styled from "styled-components";
import image from "../../images/avatarImage.png";

export const HeaderBody = styled.header`
  background-color: white;
  border-bottom: 1.5px solid var(--color-border-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
`;

export const Avatar = styled.span`
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  background-image: url(${image});
`;
