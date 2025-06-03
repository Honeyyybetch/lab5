import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lessons from './pages/Lessons';
import GalleryPage from './pages/GalleryPage';
import ProgressPage from './pages/ProgressPage';
import ProtectedRoute from './components/ProtectedRoute';
import PasswordReset from './pages/PasswordReset';

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<PasswordReset />} />

              <Route path="/lessons" element={<Lessons />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/progress" element={<ProgressPage />} />
          </Routes>
        </main>

        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;