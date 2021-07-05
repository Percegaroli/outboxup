import Typography from "../../atoms/Typography";
import Header from "../../organisms/Header";
import Container from "../../atoms/Container";
import TasksList from "../../organisms/TasksList";
import { TitleContainer, StyledPageContainer, StyledFooter } from './styles';
import { TaskModel } from "../../../model/Task/TaskModel";
import NewTaskModal from '../../organisms/NewTaskModal';
import { useState } from "react";
import { NewTaskModel } from "../../../model/Task/NewTaskModel";
import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";

interface Props {
  tasks: Array<TaskModel>
  createTask: (task: NewTaskModel) => void
  closeTask: (id: string) => void
  openTask: (id: string) => void 
}

const HomeTemplate = ({ tasks, createTask, closeTask, openTask }: Props) => {
  const [ isShowingNewTaskModal, setIsShowingNewTaskModal ] = useState(false);

  return (
    <StyledPageContainer>
      <div>
        <Header newTaskButtonAction={() => setIsShowingNewTaskModal(true)}/>
        <Container>
          <TitleContainer>
            <Typography
              size={TypographySize.lg}
              weight={TypographyWeight.BOLD}
            >
              Hi there.
            </Typography>
          </TitleContainer>
          <TasksList 
            closeTask={closeTask}
            openTask={openTask}
            tasks = {tasks}
          />
        </Container>
      </div>
      <Container>
        <StyledFooter />
      </Container>
      <NewTaskModal 
        isOpen={isShowingNewTaskModal}
        closeModal={() => setIsShowingNewTaskModal(false)}
        createTask={createTask}
      />
    </StyledPageContainer>
  )
}

export default HomeTemplate;