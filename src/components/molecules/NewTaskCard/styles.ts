import styled from "styled-components";
import TextArea from "../../atoms/TextArea";
import Typography from "../../atoms/Typography";

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
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 1.3rem;
  cursor: pointer;
`;

export const DescriptionInput = styled(TextArea)`
  margin: 2rem 0;
`;

export const Title = styled(Typography)`
  margin-bottom: 4.4rem;
`;