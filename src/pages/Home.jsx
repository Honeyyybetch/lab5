import { featuresData } from '../data';

const Home = () => {
  return (
    <>
      {/* Герой секція */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Професійний курс фотографії <br />
              <span>Honey Shot</span>
            </h1>
            <p className="hero-subtitle">
              Навчайся у зручний час та розвивай свої навички
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07" 
              alt="Фотограф на занятті" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Секція переваг */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Наші переваги</h2>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;