import { forwardRef } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

import style from './ProfileButton.module.scss';

import { selectIsLoggedIn } from 'components/header/profile_button_container/profile_button/profile-button-selectors';

type ProfileButtonPropsType = {
  onClick?: () => void;
};

export const ProfileButton = forwardRef<HTMLDivElement, ProfileButtonPropsType>(
  (props, ref) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const title = isLoggedIn ? 'Profile' : 'Sign in';

    return (
      <div {...props} ref={ref}>
        <div className={style.profileButton}>
          <div className={style.iconWrapper}>
            <PersonIcon color="primary" />
          </div>
          <span className={style.text}>{title}</span>
        </div>
      </div>
    );
  },
);
