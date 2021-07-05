import React from 'react';
import { TypographyWeight } from '../../../enums/components/Typography/Weight';
import Logo from '../../atoms/Logo';
import { StyledContainer, StyledButton } from './styles';
interface Props {
  newTaskButtonAction: () => void
}

const Header = ({ newTaskButtonAction }: Props) => {
  return (
    <StyledContainer>
      <Logo/>
      <StyledButton 
        text='New Task'
        onClick={newTaskButtonAction}
        typographyProps={{
          weight: TypographyWeight.SEMI_BOLD
        }}
      />
    </StyledContainer>
  )
}

export default Header; 