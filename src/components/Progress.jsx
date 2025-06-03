import { progressData } from '../data';

const Progress = () => {
  return (
    <div className="progress-container">
      {/* Загальна статистика */}
      <div className="stats">
        <div className="stat-item">
          <h2>{progressData.generalStats.completionPercentage}%</h2>
          <p>Завершено курс</p>
        </div>
        <div className="stat-item">
          <h2>{progressData.generalStats.completedLessons}</h2>
          <p>Пройдено уроків</p>
        </div>
        <div className="stat-item">
          <h2>{progressData.generalStats.averageScore}</h2>
          <p>Середній бал</p>
        </div>
      </div>

      {/* Список уроків */}
      <div className="lessons-list">
        <h3>Останні пройдені уроки</h3>
        {progressData.recentLessons.map(lesson => (
          <div key={lesson.id} className="lesson-item">
            <h4>{lesson.title}</h4>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(lesson.score / lesson.maxScore) * 100}%` }}
              ></div>
            </div>
            <p>{lesson.score}/{lesson.maxScore}</p>
          </div>
        ))}
      </div>

      {/* Досягнення */}
      <div className="achievements">
        <h3>Досягнення</h3>
        {progressData.achievements.map(achievement => (
          <div key={achievement.id} className="achievement-item">
            <span className="icon">{achievement.icon}</span>
            <div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;