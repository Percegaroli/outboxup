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
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 201;
`;