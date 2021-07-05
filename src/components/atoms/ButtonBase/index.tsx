import { Button } from './styles'

interface Props {
  className: string;
  onClick: () => void;
  fullWidth?: boolean
  variant?: 'filled' | 'outlined'
  active?: boolean
}

const ButtonBase: React.FC<Props> = ({
  className, 
  children, 
  onClick,
  fullWidth = false,
  variant = 'filled',
  active = false
}) => {
  return (
    <Button 
      className = {className}
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant}
      active={active}
    >
      {children}
    </Button>
  )
}

export default ButtonBase;