import { BTN } from "./style"

interface ButtonProps{
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({name, onClick, disabled}: ButtonProps) => {
  return (
    <BTN onClick={onClick} disabled={disabled}>
      {name}
    </BTN>
  )
}

export default Button