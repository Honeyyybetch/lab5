import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  // Решта коду залишається без змін...

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Реєстрація</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль (мінімум 6 символів)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            required
          />
          <button type="submit" className="btn btn-primary">
            Зареєструватись
          </button>
        </form>

        <div className="auth-links">
          <p>Вже маєте акаунт? <Link to="/login">Увійти</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;