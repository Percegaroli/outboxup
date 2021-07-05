import { Circle } from './styles';

interface Props {
  className?: string
}

const OutlinedCircle = ({className= ''}: Props) => {
  return <Circle className = {className}/>
}

export default OutlinedCircle;