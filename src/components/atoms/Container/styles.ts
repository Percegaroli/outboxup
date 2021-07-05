import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0 1.6rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}){
    max-width: 1200px;
  }
`;