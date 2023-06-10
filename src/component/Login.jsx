import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  {useNavigate}  from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:`url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`
  },
  paper: {
    padding: theme.spacing(9),
    maxWidth: 400,
  },
  textField: {
   marginBottom: theme.spacing(0.5),
   width: '100%',
   },
}));

const Login = () => {

  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const isEmailValid = (email) => {
   const emailRegex=/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i;
   return  emailRegex.test(email)

 };

 const isPasswordValid = (password) => {
   return password.length >= 8;
 };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", true)
    console.log("state "+email)
    navigate('/home', { state: { email } });
  };



  const isLoginFormValid = isEmailValid(email) && isPasswordValid(password);


  return (
    <div className={classes.root} >
      <Paper elevation={3} className={classes.paper} >
         <Grid container spacing={10} direction="column" alignItems="center" >
          <Grid item >
             <h2>Login</h2>
          </Grid>

          <Grid item  >
            <form 
            onSubmit={handleSubmit}
            >
              <Grid container spacing={2} direction="column" >

                <Grid item>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={classes.textField}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={classes.textField}
                    required
                  />
                </Grid>

              </Grid>

              <Grid item style={{marginTop:14}}  >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={!isLoginFormValid}
                >
                  Sign In
                </Button>
              </Grid>

            </form>
          </Grid>


        </Grid> 
      </Paper>
    </div>
  );
};

export default Login;
