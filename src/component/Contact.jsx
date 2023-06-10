import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`,
    backgroundSize: 'cover',
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
    width: '90%',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  textField: {
    marginBottom: theme.spacing(0.5),
    width: '100%',
  },
}));

const Contact = () => {

  const classes = useStyles();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Message:', message);
    setName('');
    setSubject('');
    setMessage('');
    setIsSubmitted(true);
  };

  const handleSnackbarClose = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <NavBar />
      <div className={classes.root} style={{ backgroundColor: 'red' }}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item>
              <h2>Contact Us</h2>
            </Grid>

            <Grid item style={{ width: '80%' }}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={1} direction="column">

                  <Grid item>
                    <TextField
                      label="Name"
                      variant="outlined"
                      value={name}
                      onChange={handleNameChange}
                      fullWidth
                      required
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      label="Subject"
                      variant="outlined"
                      value={subject}
                      onChange={handleSubjectChange}
                      fullWidth
                      required
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={message}
                      onChange={handleMessageChange}
                      fullWidth
                      required
                      className={classes.textField}
                    />
                  </Grid>

                </Grid>

                <Grid item>
                  <Button
                    style={{ marginTop: 10, marginBottom: 10 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Send
                  </Button>
                </Grid>

              </form>
            </Grid>

          </Grid>
        </Paper>
      </div>

      <Snackbar
        open={isSubmitted}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Thank you for your message!"
      />
    </>
  );
};

export default Contact;


