import { TypographyColors } from "../../../enums/components/Typography/Colors";
import { TypographySize } from "../../../enums/components/Typography/Size";
import Typography, { TypographyProps } from "../../atoms/Typography";
import { StyledButtonBase } from './styles';

interface Props {
  className?: string
  text: string;
  typographyProps?: TypographyProps
  onClick: () => void
  fullWidth?: boolean
  variant?: 'filled' | 'outlined'
  active?: boolean
}

const TextButton = ({
  text, 
  className = '',
  typographyProps,
  onClick,
  fullWidth = false,
  variant = 'filled',
  active = false
}: Props) => {
  return (
    <StyledButtonBase 
      className = {className}
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant}
      active={active}
    >
      <Typography 
        color = {TypographyColors.LIGHT}
        size = {TypographySize.sm}
        {...typographyProps}
      >
        {text}
      </Typography>
    </StyledButtonBase>
  )
}

export default TextButton;