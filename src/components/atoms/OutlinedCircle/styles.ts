import styled from "styled-components";

export const Circle = styled.div`
  background-color: none;
  border: .3rem solid ${props => props.theme.button.colors.primary};
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
`;