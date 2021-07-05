import styled from "styled-components";
import Typography from "../../atoms/Typography";
import TextButton from "../../molecules/TextButton";

export const ButtonsContainer = styled.div`
  display: flex;

  & >:last-child {
    margin-left: 2rem;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 6rem;
  & >:not(:first-child){
    margin-top: 3rem;
  }
`;

export const NoTasksLabel = styled(Typography)`
  margin-top: 6rem;

  @media (max-width: ${props => props.theme.breakpoints.desktop}){
    margin-top: 3.1rem;
  }
`;

export const OutlinedButton = styled(TextButton)`
  @media (max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 1.5rem 0rem;
    width: 100%;
  }
`