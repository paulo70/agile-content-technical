import { Field } from "./sytle";

interface SearchInputProps{
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, value, onChange, ...rest}: SearchInputProps) => {
  return(
    <Field 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Input
