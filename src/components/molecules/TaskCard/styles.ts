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
`;

export const CardBody = styled.div`
  background-color: #21212B;
  padding: 2rem;
`;

export const CardFooter = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #272733;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`; 

export const StyledOutlinedCircle = styled(OutlinedCircle)`
  margin-right: 2rem;
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