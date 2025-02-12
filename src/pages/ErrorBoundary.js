import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has been caught
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.log("Error caught: ", error, errorInfo);
    this.setState({ errorMessage: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1>Something went wrong</h1>
          <p>{this.state.errorMessage || 'An unexpected error occurred.'}</p>
          <a href="/">Go back to Home</a>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
