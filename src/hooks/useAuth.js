import { useSelector } from 'react-redux';
import {
  selectUser,
  selectUserLoggedIn,
  selectUserRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const userLoggedIn = useSelector(selectUserLoggedIn);
  const userRefreshing = useSelector(selectUserRefreshing);
   const user = useSelector(selectUser);

  return {
    userLoggedIn,
    userRefreshing,
    user,
  };
};
