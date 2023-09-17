import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
   const { userLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {userLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};