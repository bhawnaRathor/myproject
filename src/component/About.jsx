import React from 'react';
import NavBar from './NavBar';
import Testimonials from './Testimonials';
import Grid from '@mui/material/Grid';
import TestimonialBox from './TestimonialBox';
import Box from '@mui/material/Box';

const About = (props) => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        backgroundImage: `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw', 
        overflowX: 'hidden', 
      }}
    >
     <NavBar email={props.email}/> 
      <Grid container justifyContent="center" spacing={2} style={{ margin: '6px auto' }}>
        <Grid item xs={10} sm={8} md={6}>
          <Testimonials />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} style={{ margin: '6px auto' }}>
        <Grid item xs={10} sm={6} md={4}>
          <TestimonialBox
            name="Jonh Deo"
            feedback="I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content."
          />
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <TestimonialBox
            name="Jane Smith"
            feedback="For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels."
          />
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <TestimonialBox
            name="Jane Smith"
            feedback="For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
