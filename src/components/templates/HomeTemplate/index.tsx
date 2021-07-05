import Typography from "../../atoms/Typography";
import Header from "../../organisms/Header";
import Container from "../../atoms/Container";
import TasksList from "../../organisms/TasksList";
import { TitleContainer, StyledPageContainer, StyledFooter } from './styles';
import { TaskModel } from "../../../model/Task/TaskModel";
import NewTaskModal from '../../organisms/NewTaskModal';
import { useState } from "react";
import { NewTaskModel } from "../../../model/Task/NewTaskModel";

interface Props {
  tasks: Array<TaskModel>
  createTask: (task: NewTaskModel) => void
}

const HomeTemplate = ({ tasks, createTask }: Props) => {
  const [ isShowingNewTaskModal, setIsShowingNewTaskModal ] = useState(false);

  return (
    <StyledPageContainer>
      <div>
        <Header newTaskButtonAction={() => setIsShowingNewTaskModal(true)}/>
        <Container>
          <TitleContainer>
            <Typography>
              Hi there.
            </Typography>
          </TitleContainer>
          <TasksList tasks = {tasks}/>
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