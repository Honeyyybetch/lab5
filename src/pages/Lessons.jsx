// src/pages/Lessons.jsx
import { useState, useEffect } from 'react';
import { FaCheck, FaClock } from 'react-icons/fa';
import { getLessons } from '../services/lessons';
import Loader from '../components/Loader';

const Lessons = () => {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const lessonsData = await getLessons();
        setLessons(lessonsData);
        setLoading(false);
      } catch (err) {
        setError('Не вдалося завантажити уроки');
        setLoading(false);
        console.error(err);
      }
    };

    fetchLessons();
  }, []);

  const handleToggleLesson = (lessonId) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId) 
        : [...prev, lessonId]
    );
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="page-container lessons-page">
        <h1 className="page-title">Наші уроки</h1>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="page-container lessons-page">
      <h1 className="page-title">Наші уроки</h1>
      
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id} 
            className={`lesson-card ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
          >
            <div className="video-wrapper">
              <iframe
                src={lesson.videoUrl}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="lesson-content">
              <h3>{lesson.title}</h3>
              
              <div className="lesson-meta">
                <span>
                  <FaClock className="meta-icon" />
                  {lesson.duration}
                </span>
              </div>
              
              <p className="lesson-description">{lesson.description}</p>
              
              <div className="lesson-materials">
                <h4>Матеріали уроку:</h4>
                <ul>
                  {lesson.materials.map((item, index) => (
                    <li key={index}>{item}</li> 
                  ))}
                </ul>
              </div>
              
              <button 
                className={`complete-btn ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
                onClick={() => handleToggleLesson(lesson.id)}
              >
                {completedLessons.includes(lesson.id) ? 'Пройдено ✓' : 'Позначити як пройдений'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;