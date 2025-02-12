import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>404 Error</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
}

export default ErrorPage;
