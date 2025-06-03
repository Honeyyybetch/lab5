import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Лого та опис */}
          <div className="footer-col">
            <h2 className="footer-logo">Honey<span>Shot</span></h2>
            <p className="footer-description">
              Професійні курси фотографії для всіх рівнів підготовки
            </p>
          </div>

          {/* Навігація */}
          <div className="footer-col">
            <h3 className="footer-title">Навігація</h3>
            <ul className="footer-nav">
              <li><a href="/lessons">Уроки</a></li>
              <li><a href="/gallery">Галерея</a></li>
              <li><a href="/progress">Прогрес</a></li>
            </ul>
          </div>

          {/* Контакти */}
          <div className="footer-col">
            <h3 className="footer-title">Контакти</h3>
            <ul className="footer-contacts">
              <li>
                <FaEnvelope className="footer-icon" />
                info@honeyshot.com
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                +380 12 345 6789
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                м. Київ, вул. Хрещатик, 1
              </li>
            </ul>
          </div>
        </div>

        {/* Копірайт */}
        <div className="footer-bottom">
          <p>&copy; 2025 Honey Shot. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;