import React, { useState } from 'react';
import api from '../services/api';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      alert('Connexion réussie !');
      window.location.href = '/';
    } catch (error) {
      setError('Email ou mot de passe incorrect');
    } finally {
      setLoading(false);
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
        🔐 Connexion
      </Typography>
      
      {error && <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>{error}</Alert>}

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
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
        value={password}
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
        disabled={loading}
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
        onClick={handleLogin}
      >
        {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Se Connecter'}
      </Button>
      
      <Typography sx={{ marginTop: 2, fontSize: '14px', color: '#555' }}>
        Vous n'avez pas de compte ?{' '}
        <span 
          style={{ color: '#3498DB', fontWeight: 'bold', cursor: 'pointer' }} 
          onClick={() => navigate('/register')}
        >
          Inscrivez-vous
        </span>
      </Typography>
    </Box>
  );
};

export default Login;
