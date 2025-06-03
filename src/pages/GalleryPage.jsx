import { useState } from 'react';
import { galleryData } from '../data';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Фільтри українською
  const filters = [
    { id: 'all', label: 'Всі' },
    { id: 'portrait', label: 'Портрет' },
    { id: 'landscape', label: 'Пейзаж' },
    { id: 'macro', label: 'Макро' },
    { id: 'street', label: 'Вулиця' }
  ];

  return (
    <div className="page-container gallery-page">
      <h1 className="page-title">Галерея робіт</h1>
      
      <div className="filters-container">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {galleryData
          .filter(item => activeFilter === 'all' || item.type === activeFilter)
          .slice(0, 6) // Обмежуємо до 6 фото (2 ряди по 3)
          .map(item => (
            <div 
              key={item.id}
              className="gallery-item"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p className="author">Автор: {item.author}</p>
                <span className="category">
                  {filters.find(f => f.id === item.type)?.label || item.type}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryPage;