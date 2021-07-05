import styled from "styled-components";

export const StyledOverlay = styled.div`
  background-color: ${props => props.theme.background.color};
  opacity: .9;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`;