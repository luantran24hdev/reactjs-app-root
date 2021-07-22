import styled from "styled-components";

// Styled component named StyledButton
export const StyledButton = styled.svg`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background: none;
  display: flex;
  margin: auto;
  ${(props) => {
    if (props.isLoading) {
      return `
        opacity:1;
        visibility:visible;
        `;
    } else {
      return `opacity: 0;
      visibility: hidden;`;
    }
  }}
`;
