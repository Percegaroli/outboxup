import InputBase from "../../atoms/InputBase"
import { Card, StyledButton, CloseButton, CardHeader, Title, FormContainer, DescriptionInput } from './styles';
import { useState } from "react";
import { NewTaskModel } from "../../../model/Task/NewTaskModel";
import CloseIcon from '../../../assets/svgs/closeIcon.svg';
import { TypographyWeight } from "../../../enums/components/Typography/Weight";

interface Props {
  className?: string
  createTask: (task: NewTaskModel) => void 
  closeModal: () => void
}

const NewTaskCard = ({className, createTask, closeModal}: Props) => {
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
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      </CardHeader>
      <FormContainer>
        <Title weight={TypographyWeight.BOLD}>
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
        <StyledButton 
          text='Save'
          onClick={onCreateNewTask}
          fullWidth
          typographyProps={{
            weight: TypographyWeight.SEMI_BOLD
          }}
        />
      </FormContainer>
    </Card>
  );
}

export default NewTaskCard; 