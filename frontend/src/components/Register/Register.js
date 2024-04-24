// src/components/Register/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import authService from '../../api/authService';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const regData = await authService.register(username, password);
      console.log(regData);
      // If registration is successful, automatically log the user in
      const loginData = await authService.login(username, password);
      console.log(loginData);
      // You might now want to store the login token received from loginData
      // in your app's state, local storage, or wherever you manage it.

      // Redirect to the home page after successful login
      navigate('/home');
    } catch (error) {
      console.error(error); // For debugging, you might want to log the actual error
      setError('Failed to register or log in');
      // Handle registration or login error
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegister} noValidate>
        <div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;