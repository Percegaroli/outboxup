import { useState } from "react";
import { TaskModel } from "../../../model/Task/TaskModel";
import Container from "../../atoms/Container";
import TaskCard from "../../molecules/TaskCard";
import TextButton from "../../molecules/TextButton";
import { ButtonsContainer, CardsContainer } from './styles';

interface Props {
  tasks: Array<TaskModel>
  className?: string;
}

const TasksList = ({className, tasks}: Props) => {
  const [ activeFilter, setActiveFilter] = useState(0);

  const renderTaskCards = () => {
    return tasks ? (
      <CardsContainer>
        {tasks.map(task => (
          <TaskCard 
            task={task} 
            key={task.id}
          />
        ))}
      </CardsContainer>
    ) : null;
  }

  return (
    <Container className = {className}>
      <ButtonsContainer>
        <TextButton 
          text = 'To do'
          onClick={() => setActiveFilter(0)}
          variant='outlined'
          active={activeFilter === 0}
        />
        <TextButton 
          text='Closed' 
          onClick={() => setActiveFilter(1)}
          variant='outlined'
          active={activeFilter === 1}
        />
      </ButtonsContainer>
      {renderTaskCards()}
    </Container>
  )
}

export default TasksList;