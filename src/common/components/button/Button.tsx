import { FC } from 'react';

type ButtonPropsType = {
  className: string;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
  submit?: boolean;
};

export const Button: FC<ButtonPropsType> = ({
  className,
  title,
  onClick,
  submit,
  disabled,
  form,
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={className}
      onClick={onClick}
      disabled={disabled}
      form={form}
    >
      {title}
    </button>
  );
};
