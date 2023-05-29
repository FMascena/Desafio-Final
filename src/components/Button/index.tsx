import { ButtonStyle } from "./Styles";
import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ButtonStyle onClick={handleReload} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
