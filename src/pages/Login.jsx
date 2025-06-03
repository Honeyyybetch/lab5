import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Невірний email або пароль');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError('Помилка автентифікації через Google');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <span>Honey</span>Shot
          </div>
          <h2>Вітаємо знову!</h2>
          <p>Увійдіть, щоб продовжити навчання</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Увійти
          </button>
        </form>

        <div className="divider">
          <span>або</span>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="google-btn"
        >
          <FaGoogle className="google-icon" />
          Увійти через Google
        </button>

        <div className="login-footer">
          <Link to="/reset-password" className="forgot-password">
            Забули пароль?
          </Link>
          <p>
            Ще не маєте акаунту? <Link to="/signup">Реєстрація</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;