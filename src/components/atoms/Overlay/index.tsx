import { StyledOverlay } from './styles';

interface Props {
  onClick: () => void
}

const Overlay = ({ onClick }: Props) => <StyledOverlay onClick={onClick}/>

export default Overlay;