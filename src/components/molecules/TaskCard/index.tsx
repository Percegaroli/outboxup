import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";
import { TaskModel } from "../../../model/Task/TaskModel";
import Typography from "../../atoms/Typography"
import { Card, CardHeader, MoreOptionsButton,  CardBody, CardFooter, BodyTypography,  LeftContainer, StyledOutlinedCircle } from './styles';
import MoreIcon from '../../../assets/svgs/moreIcon.svg';
import TaskCardActions from "../TaskCardActions";
import { useState } from "react";

interface Props {
  task: TaskModel
  className?: string
  closeTask: () => void
  openTask: () => void
}

const TaskCard = ({ task, className = '', closeTask, openTask }: Props) => {
  const { title, description , date, closed } = task;
  const [isShowingActions, setIsShowingActions ] = useState(false);

  return (
    <Card className={className}>
      <CardHeader>
        <LeftContainer>
          <StyledOutlinedCircle />
          <Typography
            size={TypographySize.sm}
            weight={TypographyWeight.SEMI_BOLD}
          >
            {title}
          </Typography>
        </LeftContainer>
        <MoreOptionsButton onClick={() => setIsShowingActions(!isShowingActions)}>
          <MoreIcon />
        </MoreOptionsButton>
        <TaskCardActions 
          isOpen = {isShowingActions}
          closeTask={closeTask}
          isTaskClosed={closed}
          openTask={openTask}
        />
      </CardHeader>

      <CardBody>
        <BodyTypography size={TypographySize.sm} >
          {description}
        </BodyTypography>
      </CardBody>

      <CardFooter>
        <Typography
          size={TypographySize.sm}
          weight={TypographyWeight.LIGHT}
        >
          {date.toString()}
        </Typography>
      </CardFooter>
    </Card>
  )
}

export default TaskCard;