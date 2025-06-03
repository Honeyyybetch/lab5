// src/pages/PasswordReset.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setError('');
      setTimeout(() => navigate('/login'), 3000); // Перенаправлення через 3 сек
    } catch (err) {
      setError('Помилка: перевірте правильність email');
      setSuccess(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Скидання пароля</h2>
        
        {success && (
          <div className="success-message">
            Лист з інструкціями відправлено на {email}
          </div>
        )}

        {!success && (
          <>
            <form onSubmit={handleReset}>
              <input
                type="email"
                placeholder="Введіть ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Надіслати інструкції
              </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            <div className="auth-links">
              <p>
                <Link to="/login">Повернутися до входу</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;