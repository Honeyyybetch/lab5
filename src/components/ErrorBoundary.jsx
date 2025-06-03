// src/components/ErrorBoundary.jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Щось пішло не так 😢</h2>
          <p>Будь ласка, оновіть сторінку або спробуйте пізніше.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;