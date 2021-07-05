import styled from "styled-components";

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