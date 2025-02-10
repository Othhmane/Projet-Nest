import React, { useState } from 'react';
import api from '../services/api';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post('/auth/register', { username, email, password });
      alert('Inscription réussie !');
      window.location.href = '/login';
    } catch (error) {
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: 400,
        margin: '0 auto',
        marginTop: 5,
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: 3, color: '#3498DB', fontWeight: 'bold' }}>
        Inscription
      </Typography>
      
      {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}

      <TextField
        label="Nom d'utilisateur"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setUsername(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#B3C7E6' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          }
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#B3C7E6' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          }
        }}
      />
      <TextField
        label="Mot de passe"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#B3C7E6' },
            '&:hover fieldset': { borderColor: '#3498DB' },
            '&.Mui-focused fieldset': { borderColor: '#3498DB' },
          }
        }}
      />
      
      <Button
        variant="contained"
        fullWidth
        sx={{
          marginTop: 2,
          padding: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #5DADE2, #3498DB)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(135deg, #3498DB, #5DADE2)',
            transform: 'scale(1.05)',
          },
        }}
        onClick={handleRegister}
      >
        S'inscrire
      </Button>
      
      <Typography sx={{ marginTop: 2, fontSize: '14px', color: '#555' }}>
        Vous avez déjà un compte ?{' '}
        <span 
          style={{ color: '#3498DB', fontWeight: 'bold', cursor: 'pointer' }} 
          onClick={() => navigate('/login')}
        >
          Connectez-vous
        </span>
      </Typography>
    </Box>
  );
};

export default Register;
