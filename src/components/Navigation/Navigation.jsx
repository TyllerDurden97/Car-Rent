import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
   const { userLoggedIn } = useAuth();

  return (
    <nav className={css.navWrap}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
        <NavLink
           className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};