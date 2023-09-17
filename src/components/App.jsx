import { React } from "react";
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/thunks';
// import { useAuth } from 'hooks';
import { Favorite } from "@mui/icons-material";
// import { logOut } from '../redux/auth/thunks';
// import { phonebook } from "redux/contacts/selectors";

const Home = lazy(() => import('../pages/Home/Home'));
const Favourite = lazy(() => import('../pages/Favorites/Favourite'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
//   const { userRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]); 
   
//    useEffect(() => {
//       if (logOut.fulfilled) {
//          phonebook.contacts = {};
// }  }, []); 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<Favourite />} />        
        <Route
          path="/login"
          element={<LoginPage />} />        
      </Route>
           <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};


