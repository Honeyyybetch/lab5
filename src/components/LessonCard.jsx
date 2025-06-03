const LessonCard = ({ lesson, completed, onComplete }) => {
  return (
    <div className="lesson-card">
      <div className="video-container">
        <iframe 
          src={lesson.videoUrl} 
          title={lesson.title} 
          allowFullScreen
        ></iframe>
      </div>
      <div className="lesson-content">
        <h3 className="lesson-title">{lesson.title}</h3>
        <div className="lesson-meta">
          <span>{lesson.lessonsCount} уроки</span>
          <span>{lesson.duration}</span>
        </div>
        <p className="lesson-desc">{lesson.description}</p>
        
        <div className="lesson-materials">
          <h4>Матеріали уроку:</h4>
          <ul>
            {lesson.materials.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <button 
          className={`btn ${completed ? 'btn-primary' : 'btn-outline'}`}
          onClick={onComplete}
        >
          {completed ? 'Пройдено ✓' : 'Позначити як пройдений'}
        </button>
      </div>
    </div>
  );
};

export default LessonCard;