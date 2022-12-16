import { FC } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { PreloaderLinear } from 'common/components/preloaders/preloader_linear/PreloaderLinear';
import { useAppSelector } from 'common/hooks/hooks';
import { CartButton } from 'components/header/cart_button/CartButton';
import style from 'components/header/Header.module.scss';
import { LogoButton } from 'components/header/logo_button/LogoButton';
import { ProfileButton } from 'components/header/profile_button/ProfileButton';

export const Header: FC = () => {
  const isFetching = useAppSelector(state => state.app.isFetching);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={style.toolbar}>
          <LogoButton />
          <div>
            <ProfileButton />
            <CartButton />
          </div>
        </Toolbar>
      </AppBar>
      {isFetching && <PreloaderLinear />}
    </Box>
  );
};
