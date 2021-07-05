import React from 'react';
import TextButton from '../../molecules/TextButton';
import Typography from '../../atoms/Typography';
import Logo from '../../atoms/Logo';
import { StyledContainer, LogoContainer } from './styles';
import { TypographyColors } from '../../../enums/components/Typography/Colors';

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