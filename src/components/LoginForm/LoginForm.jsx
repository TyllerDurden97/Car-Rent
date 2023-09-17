import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/thunks';
// import css from './LoginForm.module.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
// import { selectLoading } from 'redux/contacts/selectors';



export const LoginForm = () => {
   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
   //  form.reset();
  };

   return (
      <Box       
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', padding: '100px'}}
      // noValidate
         autoComplete="off"
         onSubmit={handleSubmit}
      >
          <Typography variant="h6" component="h2" sx={{fontSize: '30px', color: '#2a363b'}} >
           Log In
         </Typography> 
         <TextField id="email" type="email" label="email" variant="outlined" sx={{width: '350px', fontSize: '24px'} }  />
         <TextField id="password" type="password" label="password" variant="outlined" sx={{width: '350px', fontSize: '24px'} }/>
         <Button type="submit"
            variant="contained"
            size='large'
            endIcon={<LoginIcon />}
         >Log In</Button>
      </Box>


   //  <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
   //    <label className={css.label}>
   //      Email
   //      <input type="email" name="email" />
   //    </label>
   //    <label className={css.label}>
   //      Password
   //      <input type="password" name="password" />
   //    </label>
   //    <button type="submit">Log In</button>
   //  </form>
  );
};