import styled from 'styled-components';

interface Props {
  fullWidth: boolean,
  variant: 'filled' | 'outlined'
  active: boolean
}

export const Button = styled.button<Props>`
  background-color: ${props => props.variant === 'filled' ? props.theme.button.colors.primary : props.active ? '#414052' : 'transparent'};
  padding: 1.4rem 6rem;
  border-radius: 20px;
  width: ${props => props.fullWidth ? '100%' : 'initial'};
  border: ${props => props.variant === 'outlined' ? '1px solid #414052' : 'none' };

  &:hover{
    cursor: pointer;
  }
`;