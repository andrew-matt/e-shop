import { FC } from 'react';

type ButtonPropsType = {
  className: string;
  title: string;
};

export const Button: FC<ButtonPropsType> = ({ className, title }) => {
  return <div className={className}>{title}</div>;
};
