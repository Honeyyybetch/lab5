import { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup
} from 'firebase/auth';
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { Tabs, Tab, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthForms = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Обробник помилок
  const handleAuthError = (error) => {
    const errorMessages = {
      'auth/invalid-email': 'Невірний формат email',
      'auth/user-disabled': 'Користувач заблокований',
      'auth/user-not-found': 'Користувача не знайдено',
      'auth/wrong-password': 'Невірний пароль',
      'auth/email-already-in-use': 'Email вже зареєстрований',
      'auth/weak-password': 'Пароль має бути мінімум 6 символів',
      'auth/account-exists-with-different-credential': 'Акаунт вже існує з іншим методом входу',
      'auth/popup-blocked': 'Спробуйте вимкнути блокування спливних вікон для цього сайту',
      'auth/unauthorized-domain': 'Недозволений домен для автентифікації',
      'auth/popup-closed-by-user': 'Вікно автентифікації закрите'
    };
    return errorMessages[error.code] || error.message;
  };

  // Обробник відправки форми
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      switch (type) {
        case 'login':
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/');
          break;

        case 'signup':
          await createUserWithEmailAndPassword(auth, email, password);
          setSuccessMessage('Реєстрація успішна! Авторизуйтесь');
          setActiveTab('login');
          break;

        case 'reset':
          await sendPasswordResetEmail(auth, email);
          setSuccessMessage('Лист для скидання пароля відправлено');
          break;
      }
    } catch (err) {
      setError(handleAuthError(err));
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      console.error("Google auth error:", err);
      setError(handleAuthError(err));

      // Спеціальна обробка помилки закриття попапу
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Вікно автентифікації було закрито до завершення процесу');
      }
    }
  };

  // Генерація форми
  const renderAuthForm = (type) => (
    <form onSubmit={(e) => handleSubmit(e, type)} className="auth-form">
      <div className="input-group mb-3">
        <span className="input-icon"><FaEnvelope /></span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control"
        />
      </div>

      {type !== 'reset' && (
        <div className="input-group mb-4">
          <span className="input-icon"><FaLock /></span>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            className="form-control"
          />
        </div>
      )}

      <Button
        variant="primary"
        type="submit"
        className="w-100 mb-3 auth-btn"
      >
        {type === 'login' && 'Увійти'}
        {type === 'signup' && 'Зареєструватись'}
        {type === 'reset' && 'Надіслати інструкції'}
      </Button>
    </form>
  );

  return (
    <div className="auth-container p-4">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
          setError('');
          setSuccessMessage('');
        }}
        className="mb-4"
      >
        <Tab eventKey="login" title="Вхід">
          {renderAuthForm('login')}
          <div className="text-center">
            <Button
              variant="danger"
              onClick={handleGoogleAuth}
              className="w-100 google-btn"
            >
              <FaGoogle className="me-2" /> Увійти через Google
            </Button>
          </div>
        </Tab>

        <Tab eventKey="signup" title="Реєстрація">
          {renderAuthForm('signup')}
        </Tab>

        <Tab eventKey="reset" title="Скинути пароль">
          {renderAuthForm('reset')}
        </Tab>
      </Tabs>

      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
    </div>
  );
};

export default AuthForms;