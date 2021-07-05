import styled from "styled-components";
import Container from "../../atoms/Container";
import TextButton from "../../molecules/TextButton";

export const StyledContainer = styled(Container)`
  padding-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.desktop}){
    padding-top: 6rem;
  }
`;

export const StyledButton = styled(TextButton)`
  @media (max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 1.4rem 4.3rem;
  }
`;
