import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio rendering error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback" role="alert">
          <h1>Une erreur est survenue</h1>
          <p>Le portfolio n’a pas pu être affiché correctement.</p>
          <button type="button" onClick={() => window.location.reload()}>
            Recharger la page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
