import React from 'react';
import './button.scss';

interface ButtonProps {
  handler?: () => void;
  buttonText: string;
  buttonType: string;
  form?: string;
}

const Button: React.FC<ButtonProps> = ({
  handler,
  buttonText,
  buttonType,
  form,
}) => {
  return (
    <button
      form={form}
      className={`button button--${buttonType}`}
      onClick={handler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
