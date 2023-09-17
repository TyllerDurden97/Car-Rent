import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/thunks';
// import css from './RegisterForm.module.css';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Box, Button, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
   //  form.reset();
  };

   return (
      <Box       
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', padding: '100px', fontSize: '24px'}}
      // noValidate
         autoComplete="off"
         onSubmit={handleSubmit}
      >
          <Typography variant="h6" component="h2" sx={{fontSize: '30px', color: '#2a363b'}} >
           Sign Up
         </Typography> 
         <TextField id="name" type="text" label="name" variant="outlined" sx={{width: '350px', fontSize: '24px'} }  />
         <TextField id="email" type="email" label="email" variant="outlined" sx={{width: '350px', fontSize: '24px'} }  />
         <TextField id="password" type="password" label="password" variant="outlined" sx={{width: '350px', fontSize: '24px'} }/>
         <Button type="submit"
            variant="contained"
            size='large'
            endIcon={<AppRegistrationIcon />}
         >Register</Button>
      </Box>
   //  <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
   //    <label className={css.label}>
   //      Username
   //      <input type="text" name="name" />
   //    </label>
   //    <label className={css.label}>
   //      Email
   //      <input type="email" name="email" />
   //    </label>
   //    <label className={css.label}>
   //      Password
   //      <input type="password" name="password" />
   //    </label>
   //    <button type="submit">Register</button>
   //  </form>
  );
};