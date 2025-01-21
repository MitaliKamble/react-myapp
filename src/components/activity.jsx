import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate a list of valid credentials
  const validCredentials = {
    username: 'Mitali123',
    password: 'password123',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === validCredentials.username && password === validCredentials.password) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
      setIsLoggedIn(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Login Form</h2>
      {isLoggedIn ? (
        <div style={{ color: 'green', textAlign: 'center' }}>
          <h3>Welcome, {formData.username}!</h3>
          <p>You have successfully logged in.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username" style={{ marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            style={{
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />

          <label htmlFor="password" style={{ marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            style={{
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            required
          />

          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>

          {error && (
            <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
