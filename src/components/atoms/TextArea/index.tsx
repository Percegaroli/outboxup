import { ChangeEvent } from "react";
import { TextAreaBase } from './styles';

interface Props {
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string
}

const TextArea = ({
  className,
  value,
  onChange,
  placeholder
}: Props) => {
  return (
    <TextAreaBase
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      
    />
  )
}

export default TextArea;