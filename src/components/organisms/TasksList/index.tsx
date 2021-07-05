/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { TypographyColors } from "../../../enums/components/Typography/Colors";
import { TypographySize } from "../../../enums/components/Typography/Size";
import { TypographyWeight } from "../../../enums/components/Typography/Weight";
import { TaskModel } from "../../../model/Task/TaskModel";
import TaskCard from "../../molecules/TaskCard";
import { ButtonsContainer, CardsContainer, NoTasksLabel, OutlinedButton } from './styles';

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

  const renderNoTaskLabel = () => {
    return (
      <NoTasksLabel 
      size={TypographySize.md}
      weight={TypographyWeight.BOLD}
      color={TypographyColors.PRIMARY}
    >
      No tasks
    </NoTasksLabel>
    )
  }

  const renderTaskCards = () => {
    return (
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
    )
  }

  return (
    <div className = {className}>
      <ButtonsContainer>
        <OutlinedButton 
          text = 'To do'
          onClick={() => setActiveFilter(0)}
          variant='outlined'
          active={activeFilter === 0}
          typographyProps={{
            weight: TypographyWeight.SEMI_BOLD
          }}
        />
        <OutlinedButton 
          text='Closed' 
          onClick={() => setActiveFilter(1)}
          variant='outlined'
          active={activeFilter === 1}
          typographyProps={{
            weight: TypographyWeight.SEMI_BOLD
          }}
        />
      </ButtonsContainer>
      { filteredTasks.length ? renderTaskCards() : renderNoTaskLabel()}
    </div>
  )
}

export default TasksList;