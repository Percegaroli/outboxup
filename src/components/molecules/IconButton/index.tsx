import ButtonBase from '../../atoms/ButtonBase';

interface Props {
  className?: string;
  onClick: () => void
}

const IconButton: React.FC<Props> = ({
  children, 
  className = '',
  onClick
}) => {
  return (
    <ButtonBase 
      className = {className}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  )
}

export default IconButton;