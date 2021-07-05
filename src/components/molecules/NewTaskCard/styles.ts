import styled from "styled-components";
import TextArea from "../../atoms/TextArea";
import Typography from "../../atoms/Typography";
import TextButton from "../TextButton";

export const Card = styled.div`
  border-radius: 2rem;
  background-color: #21212B;
`;

export const CardHeader = styled.div`
  padding: .8rem;
  display: flex;
  justify-content: flex-end;
`;

export const FormContainer = styled.div`
  padding: 1.2rem 4.8rem 6rem;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: .2rem 2.9rem 5.3rem;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 1.3rem;
  cursor: pointer;
`;

export const DescriptionInput = styled(TextArea)`
  margin: 2rem 0;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    margin: 3.8rem 0;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 4.4rem;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    margin-bottom: 3.1rem;
  }
`;

export const StyledButton = styled(TextButton)`
  font-family: 'Poppins', sans-serif;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 1.5rem 6.3rem;
    width: initial;
    margin: 0 auto;
  }
`