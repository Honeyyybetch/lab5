import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = () => {
  const [user] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  
  // Відстеження прокрутки
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Вихід
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          Honey<span>Shot</span>
        </Link>

        {/* Навігація (видима лише після входу) */}
        {user && (
          <nav className="main-nav">
            <ul>
              <li><Link to="/lessons">Уроки</Link></li>
              <li><Link to="/gallery">Галерея</Link></li>
              <li><Link to="/progress">Прогрес</Link></li>
            </ul>
          </nav>
        )}

        {/* Кнопки автентифікації */}
        <div className="auth-buttons">
          {user ? (
            <button onClick={handleLogout} className="btn btn-outline">
              Вийти
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Увійти</Link>
              <Link to="/signup" className="btn btn-primary">Реєстрація</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;