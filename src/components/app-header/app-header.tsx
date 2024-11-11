import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { nameDataSelector } from '../../services/slice/userSlice';

export const AppHeader: FC = () => {
  const userName = useSelector(nameDataSelector);
  return <AppHeaderUI userName={userName} />;
};