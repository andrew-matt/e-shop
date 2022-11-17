import { FC } from 'react';

type ButtonPropsType = {
  className: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonPropsType> = ({ className, title, onClick, disabled }) => {
  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
