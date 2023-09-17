import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/thunks';
import { useAuth } from 'hooks';
import { Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
// import { phonebook } from "redux/contacts/selectors";
// import { useEffect } from 'react';

export const UserMenu = () => {
  const dispatch = useDispatch();
   const { user } = useAuth();

   // useEffect(() => {
//       if (logOut.fulfilled) {
//          phonebook.contacts = {};
// } }, []); 

   return (
       <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px'}}
>
         <Typography variant="subtitle1" component="p" >
           Welcome, {user.name}
         </Typography>
         <Button variant="outlined"
            color="inherit" type="button"
            onClick={() => dispatch(logOut())}
            endIcon={<LogoutIcon />}
            size="small"
         >Logout</Button>
       </Box> 
  );
};