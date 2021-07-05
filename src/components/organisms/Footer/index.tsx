import { TypographySize } from '../../../enums/components/Typography/Size';
import { TypographyWeight } from '../../../enums/components/Typography/Weight';
import Typography from '../../atoms/Typography';
import { FooterContainer } from './styles';

interface Props {
  className?: string
}

const Footer = ({
  className = ''
}: Props) => {
  return (
    <FooterContainer className={className}>
      <Typography
        size={TypographySize.sm}
        weight={TypographyWeight.LIGHT}
      >
        Developed by Outboxup
      </Typography>
    </FooterContainer>
  )
}

export default Footer;