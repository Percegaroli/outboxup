import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";
import { TaskModel } from "../../../model/Task/TaskModel";
import Typography from "../../atoms/Typography"
import { Card, CardHeader, CardBody, CardFooter, BodyTypography,  LeftContainer, Menu, StyledOutlinedCircle } from './styles';

interface Props {
  task: TaskModel
  className?: string
}

const TaskCard = ({ task, className = '' }: Props) => {
  const { title, description , date } = task;
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
        <Menu />
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