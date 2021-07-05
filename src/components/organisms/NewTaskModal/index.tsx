import { NewTaskModel } from "../../../model/Task/NewTaskModel";
import Overlay from "../../atoms/Overlay";
import NewTaskCard from "../../molecules/NewTaskCard";
import { Container, ModalContent } from './styles';

interface Props {
  createTask: (task: NewTaskModel) => void
  isOpen: boolean,
  closeModal: () => void
}

const NewTaskModal = ({createTask, isOpen, closeModal }: Props) => {
  const onCreateTask = (newTask: NewTaskModel) => {
    createTask(newTask);
    closeModal();
  }

  return isOpen ? (
    <Container>
      <Overlay onClick={closeModal}/>
      <ModalContent>
        <NewTaskCard 
          createTask={onCreateTask}
          closeModal={closeModal}
        />
      </ModalContent>
    </Container>
  ) : null;
}

export default NewTaskModal;