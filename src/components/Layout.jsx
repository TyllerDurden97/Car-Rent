import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApplBar } from './ApplBar/ApplBar';
import { Suspense } from 'react';
import * as React from 'react';
import { Box, Container } from '@mui/material';

export const Layout = () => {
  return (
   <React.Fragment>
        <Container
           maxWidth="1440px"
           disableGutters={true}
          >
            <Box sx={{ width: '100%', height: '100%' }} >
               <ApplBar />
               <Suspense fallback={null}>
                  <Outlet />
               </Suspense>
               <ToastContainer
               position="top-right"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable={false}
               pauseOnHover
               theme="colored"
              />
            </Box>
         </Container>
   </React.Fragment>     
  );
};