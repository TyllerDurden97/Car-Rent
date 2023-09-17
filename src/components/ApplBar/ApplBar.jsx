import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
// import css from './AppBar.module.css';
import { AppBar, Box, Toolbar } from '@mui/material';
// import axios from 'axios';
// import { phonebook } from "redux/contacts/selectors";

export const ApplBar = () => {
   const { userLoggedIn } = useAuth();
   // console.log(Boolean(axios.defaults.headers.common.Authorization))

   // if (axios.defaults.headers.common.Authorization === false) {
   //    phonebook.contacts = {};
   // }

   return (
      <AppBar
         // position='static'
         sx={{opacity: '0.9'}}
      >
         <Toolbar >
            <Box sx={{ flexGrow: 1 }} >
            <Navigation />
            </Box>
            <Box>
               {userLoggedIn ? <UserMenu /> : <AuthNav />}
            </Box>
         </Toolbar>         
     </AppBar>
  );
};