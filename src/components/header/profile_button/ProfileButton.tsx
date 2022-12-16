import { FC, MouseEvent, useState } from 'react';

import IconButton from '@mui/material/IconButton';

import userIcon from 'assets/icons/user.svg';
import style from 'components/header/Header.module.scss';
import { ProfileMenu } from 'components/header/profile_button/profile_menu/ProfileMenu';

export const ProfileButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <img src={userIcon} alt="user-icon" className={style.icon} />
      </IconButton>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};
