import { FC, ReactElement, ReactNode } from 'react';

import Tooltip from '@mui/material/Tooltip';

type CustomTooltipPropsType = {
  children: ReactElement;
  title: ReactNode;
  placement: MuiPlacementType;
  className: string;
};

export const CustomTooltip: FC<CustomTooltipPropsType> = ({
  children,
  title,
  placement,
  className,
}) => {
  return (
    <Tooltip title={title} placement={placement} classes={{ tooltip: className }}>
      {children}
    </Tooltip>
  );
};

// types
type MuiPlacementType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';
