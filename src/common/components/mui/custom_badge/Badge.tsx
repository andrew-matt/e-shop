import { FC, ReactNode } from 'react';

import Badge from '@mui/material/Badge';

type CustomBadgeType = {
  children: ReactNode;
  badgeContent: ReactNode;
};

export const CustomBadge: FC<CustomBadgeType> = ({ children, badgeContent }) => {
  return (
    <Badge badgeContent={badgeContent} color="success">
      {children}
    </Badge>
  );
};
