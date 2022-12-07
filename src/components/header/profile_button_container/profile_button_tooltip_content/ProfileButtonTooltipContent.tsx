import { FC } from 'react';

import { useDispatch } from 'react-redux';

import style from './ProfileButtonTooltipContent.module.scss';

import { signOut } from 'components/auth/auth-sagas';

export const ProfileButtonTooltipContent: FC = () => {
  const dispatch = useDispatch();
  const onSignOutButtonClickHandler = (): void => {
    dispatch(signOut());
  };

  return (
    <div>
      <div className={style.item}>My orders</div>
      <div
        className={style.item}
        onClick={onSignOutButtonClickHandler}
        role="presentation"
      >
        Sign out
      </div>
    </div>
  );
};
