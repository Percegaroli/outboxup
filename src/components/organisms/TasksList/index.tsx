/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { TaskModel } from "../../../model/Task/TaskModel";
import TaskCard from "../../molecules/TaskCard";
import TextButton from "../../molecules/TextButton";
import { ButtonsContainer, CardsContainer } from './styles';

interface Props {
  tasks: Array<TaskModel>
  className?: string;
  closeTask: (id: string) => void
  openTask: (id: string) => void
}

const TasksList = ({className, tasks, closeTask, openTask}: Props) => {
  const [ activeFilter, setActiveFilter] = useState(0);

  const getClosedTasks = () => tasks.filter(task => task.closed);

  const getActiveTasks = () => tasks.filter(task => !task.closed);

  const filteredTasks = useMemo(() => {
    return activeFilter === 0 ? getActiveTasks() : getClosedTasks();
  }, [activeFilter, getClosedTasks, getActiveTasks, tasks]);

  const renderTaskCards = () => {
    return filteredTasks ? (
      <CardsContainer>
        {filteredTasks.map(task => (
          <TaskCard 
            task={task} 
            key={task.id}
            closeTask={() => closeTask(task.id)}
            openTask={() => openTask(task.id)}
          />
        ))}
      </CardsContainer>
    ) : null;
  }

  return (
    <div className = {className}>
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
    </div>
  )
}

export default TasksList;