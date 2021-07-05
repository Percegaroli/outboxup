import { Container } from './styles';

interface Props {
  className?: string;
}

const PageContainer: React.FC<Props> = ({ className, children}) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

export default PageContainer;