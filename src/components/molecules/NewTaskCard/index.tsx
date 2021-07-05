import InputBase from "../../atoms/InputBase"
import { Card, CloseButton, CardHeader, Title, FormContainer, DescriptionInput } from './styles';
import { useState } from "react";
import TextButton from "../TextButton";
import { NewTaskModel } from "../../../model/Task/NewTaskModel";
import CloseIcon from '../../../assets/svgs/closeIcon.svg';

interface Props {
  className?: string
  createTask: (task: NewTaskModel) => void 
}

const NewTaskCard = ({className, createTask}: Props) => {
  const [ newTask, setNewTask] = useState<NewTaskModel>({
    description: '',
    title: '',
    date: new Date()
  });

  const onCreateNewTask = () => {
    createTask({
      ...newTask,
      date: new Date()
    })
  }

  return (
    <Card className={className}>
      <CardHeader >
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </CardHeader>
      <FormContainer>
        <Title>
          New Task
        </Title>
        <InputBase
          value={newTask.title}
          onChange={(event) => setNewTask({...newTask, title: event.target.value})}
          placeholder='Title'
        />
        <DescriptionInput
          value={newTask.description}
          onChange={(event) => setNewTask({...newTask, description: event.target.value})}
          placeholder='Description'
          
        />
        <TextButton 
          text='Save'
          onClick={onCreateNewTask}
          fullWidth
        />
      </FormContainer>
    </Card>
  );
}

export default NewTaskCard; 