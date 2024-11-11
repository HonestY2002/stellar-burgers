import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect} from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {getOrdersList, getOrdersListSelector } from '../../services/slice/orderSlice';

export const ProfileOrders: FC = () => {
  /** TODO: взять переменную из стора */
  const orders: TOrder[] = useSelector(getOrdersListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersList());
  }, [dispatch]);


  return <ProfileOrdersUI orders={orders} />;
};
