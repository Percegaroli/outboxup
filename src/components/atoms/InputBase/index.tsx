import React from 'react';
import { Input } from './styles';

interface Props {
  className?: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'textarea';
}

const InputBase = ({
  className,
  value,
  onChange,
  placeholder,
  type='text'
}: Props) => {
  return (
    <Input
      type={type}
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default InputBase;