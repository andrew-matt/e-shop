import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './ProfileButtonTooltipContent.module.scss';

import { signOut } from 'components/auth/auth-sagas';

export const ProfileButtonTooltipContent: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onMyOrdersButtonClickHandler = (): void => {
    navigate('/user-orders');
  };

  const onSignOutButtonClickHandler = (): void => {
    dispatch(signOut());
  };

  return (
    <div>
      <div
        className={style.item}
        onClick={onMyOrdersButtonClickHandler}
        role="presentation"
      >
        My orders
      </div>
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
