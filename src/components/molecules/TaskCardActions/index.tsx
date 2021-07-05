import { Container, Item } from './styles';
import Typography from '../../atoms/Typography';
import { TypographySize } from '../../../enums/components/Typography/Size';
import { TypographyWeight } from '../../../enums/components/Typography/Weight';

interface Props {
  className?: string;
  isOpen?: boolean
  closeTask: () => void
  openTask: () => void
  isTaskClosed: boolean
}

const TaskCardActions = ({className, isOpen, closeTask, openTask, isTaskClosed}: Props) => {
  const renderChangeStatusButton = () => {
    return !isTaskClosed ? (
      <Item onClick={closeTask}>
        <Typography 
          size={TypographySize.sm}
          weight={TypographyWeight.LIGHT}
        >
          Close Task
        </Typography>
    </Item>
    ) : (
      <Item onClick={openTask}>
        <Typography 
          size={TypographySize.sm}
          weight={TypographyWeight.LIGHT}
        >
          Open Task
        </Typography>
    </Item>
    )
  }

  return isOpen ? (
    <Container className={className}>
      {renderChangeStatusButton()}
    </Container>
  ) : null
}

export default TaskCardActions;