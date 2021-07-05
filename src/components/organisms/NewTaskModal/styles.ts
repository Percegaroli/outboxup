import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 0 1.6rem;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 201;
`;