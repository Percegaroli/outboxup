import { TypographyColors } from "../../../enums/components/Typography/Colors";
import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyVariants } from "../../../enums/components/Typography/Variants";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";
import { StyledTypography } from './styles';

export interface TypographyProps {
  className?: string;
  variant?: TypographyVariants;
  color?: TypographyColors;
  weight?: TypographyWeight;
  size?: TypographySize;
}

const Typography: React.FC<TypographyProps> = ({
  className= '',
  variant= TypographyVariants.BODY1,
  color = TypographyColors.LIGHT,
  weight = TypographyWeight.REGULAR,
  size = TypographySize.md,
  children
}) => {

  const getTypographySize = () => {
    if (size) return size;
    switch(variant){
      case TypographyVariants.H1:
        return TypographySize.lg;
      case TypographyVariants.H2:
        return TypographySize.md;
      default:
        return TypographySize.sm;
    }
  }

  return (
    <StyledTypography 
      className = {className}
      as={variant}
      size={getTypographySize()}
      color={color}
      weight={weight}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography;