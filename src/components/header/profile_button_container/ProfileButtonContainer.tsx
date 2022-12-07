import { FC } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './ProfileButtonContainer.module.scss';

import { CustomTooltip } from 'common/components/custom_tooltip/CustomTooltip';
import { selectIsLoggedIn } from 'components/header/profile_button_container/profile-button-container-selectors';
import { ProfileButton } from 'components/header/profile_button_container/profile_button/ProfileButton';
import { ProfileButtonTooltipContent } from 'components/header/profile_button_container/profile_button_tooltip_content/ProfileButtonTooltipContent';

export const ProfileButtonContainer: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const onProfileButtonClickHandler = (): void => navigate('/login');

  if (!isLoggedIn) {
    return <ProfileButton onClick={onProfileButtonClickHandler} />;
  }

  return (
    <CustomTooltip
      title={<ProfileButtonTooltipContent />}
      placement="bottom-start"
      className={style.tooltip}
    >
      <ProfileButton />
    </CustomTooltip>
  );
};
