import { StyledContainer } from './styles';

interface Props {
  className?: string
}

const Container: React.FC<Props> = ({className, children}) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container;