import React from 'react';
import { Typography } from '@mui/material';

const styles = {
    banner: {
      position: 'relative',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    bannerText: {
      position: 'absolute',
      textAlign: 'center',
      color: '#fff',
      padding: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '1rem',
      width: '80%',
      maxWidth: '500px',
    },
  };
const Banner = ({ item }) => {
  return (
    <div style={styles.banner}>
    <img src={item.image} alt={item.title} style={styles.bannerImage} />
    <div style={styles.bannerText}>
      <Typography variant="h4" component="h2" gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="subtitle1">{item.description}</Typography>
    </div>
  </div>
  );
};
export default Banner