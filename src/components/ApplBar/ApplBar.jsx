import { Navigation } from '../Navigation/Navigation';
// import css from './AppBar.module.css';
import { AppBar, Box, Toolbar } from '@mui/material';

export const ApplBar = () => {

   return (
      <AppBar
         // position='static'
         sx={{opacity: '0.9', flexDirection: 'row'}}
      >
         <Toolbar >
            <Box sx={{ flexGrow: 1 }} >
            <Navigation />
            </Box>
            {/* <Box>
                <AuthNav />
            </Box> */}
         </Toolbar>         
     </AppBar>
  );
};