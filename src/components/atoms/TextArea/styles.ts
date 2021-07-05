import styled from "styled-components";

export const TextAreaBase = styled.textarea`
  background-color: #272733;
  border: none;
  border-radius: 2rem;
  padding: 2rem;
  width: 100%;
  min-height: 23.4rem;
  font-family: inherit;
  resize: none;
  color: white;
  font-size: 1.6rem;

  &::placeholder{
    font-size: 1.6rem;
    color: #777777;
    vertical-align: top;
  }
`;