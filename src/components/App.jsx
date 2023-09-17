import { React } from "react";
import {  lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { Favorite } from "@mui/icons-material";

const Home = lazy(() => import('../pages/Home/Home'));
const Favourite = lazy(() => import('../pages/Favorites/Favourite'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route
          path="/catalog"
          element={<Catalog />} />
         <Route
          path="/favorites"
          element={<Favourite />} />               
      </Route>
         <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};


