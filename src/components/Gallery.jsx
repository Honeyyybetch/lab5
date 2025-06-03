import { useState } from 'react';
import { galleryData } from '../data';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');



  // GalleryPage.jsx
  console.log('Gallery Data:', galleryData); // Повинен показувати масив

  return (
    <div className="gallery-section">
      <div className="filters-container">
        {['all', 'portrait', 'landscape', 'macro', 'street'].map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'all' ? 'Всі' : filter}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {galleryData
          .filter(item => activeFilter === 'all' || item.type === activeFilter)
          .map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>Автор: {item.author}</p>
                <span className="photo-type">{item.type}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;