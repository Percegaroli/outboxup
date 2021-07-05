import styled from "styled-components";
import { TypographyColors } from "../../../enums/components/Typography/Colors";
import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";

interface Props {
  color: TypographyColors;
  weight: TypographyWeight;
  size: TypographySize;
}

export const StyledTypography = styled.p<Props>`
  font-size: ${props => props.theme.typography.size[props.size]};
  color: ${props => props.theme.typography.colors[props.color]};
  font-weight: ${props => props.weight}
`;