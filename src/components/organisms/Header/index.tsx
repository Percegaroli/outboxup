import React from 'react';
import TextButton from '../../molecules/TextButton';
import Logo from '../../atoms/Logo';
import { StyledContainer } from './styles';
interface Props {
  newTaskButtonAction: () => void
}

const Header = ({ newTaskButtonAction }: Props) => {
  return (
    <StyledContainer>
      <Logo/>
      <TextButton 
        text='New Task'
        onClick={newTaskButtonAction}
      />
    </StyledContainer>
  )
}

export default Header; 