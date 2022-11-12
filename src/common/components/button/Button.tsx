import { FC } from 'react';

type ButtonPropsType = {
  className: string;
  title: string;
  onClick: () => void;
};

export const Button: FC<ButtonPropsType> = ({ className, title, onClick }) => {
  return (
    <div className={className} onClick={onClick} role="presentation">
      {title}
    </div>
  );
};
