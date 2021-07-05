import styled from 'styled-components';
import OutlinedCircle from '../../atoms/OutlinedCircle';
import Typography from '../../atoms/Typography';

export const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background-color: #272733;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 1.3rem 2.4rem .9rem 1.6rem;
  }
`;

export const CardBody = styled.div`
  background-color: #21212B;
  padding: 2rem;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: 2rem .8rem;
  }
`;

export const CardFooter = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #272733;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    padding: .7rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`; 

export const StyledOutlinedCircle = styled(OutlinedCircle)`
  margin-right: 2rem;

  @media(max-width: ${props => props.theme.breakpoints.desktop}){
    margin-right: .9rem;
  }
`;

export const MoreOptionsButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
`; 

export const BodyTypography = styled(Typography)`
  line-height: 1.62;
`;