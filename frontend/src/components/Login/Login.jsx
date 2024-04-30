// src/components/Login/Login.js
import React, { useState } from 'react';
import authService from '../../api/authService'; // Make sure this path is correct
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors

    try {
      const data = await authService.login(username, password);
      console.log(data); // Consider removing console logs for production
      // Handle successful login here, such as storing the token if provided
    navigate('/browse'); // Redirect to the home page after login
    } catch (error) {
      console.error(error); // Log the error to the console for debugging
      setError('Failed to login'); // Set a user-friendly error message
      // Optionally, use error.message or a custom error handling function
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="login-fileds">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;