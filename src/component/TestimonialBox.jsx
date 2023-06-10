import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TestimonialBox = ({ name, feedback }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <Paper sx={{ padding: '20px', width: '300px' }}>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">"{feedback}"</Typography>
      </Paper>
    </Box>
  );
};

export default TestimonialBox;
