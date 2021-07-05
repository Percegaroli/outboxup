import List from '../../../assets/svgs/list.svg';
import { TypographyColors } from '../../../enums/components/Typography/Colors';
import Typography from '../Typography';
import { LogoContainer, Circle } from './styles';

const Logo = () => {
  return (
    <LogoContainer>
      <Circle>
        <List />
      </Circle>
      <Typography color={TypographyColors.LIGHT}>
        tsks.
      </Typography>
    </LogoContainer>
  )
}

export default Logo;