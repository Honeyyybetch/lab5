import { progressData } from '../data';
import { FaTrophy, FaStar, FaBookOpen } from 'react-icons/fa';

const ProgressPage = () => {
  return (
    <div className="page-container progress-page">
      <div className="progress-header-spacer"></div> {/* Доданий спейсер */}
      <h1 className="page-title">Мій прогрес</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{progressData.generalStats.completionPercentage}%</div>
          <div className="stat-label">Завершено курсу</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">{progressData.generalStats.completedLessons}</div>
          <div className="stat-label">Пройдено уроків</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">{progressData.generalStats.averageScore}</div>
          <div className="stat-label">Середній бал</div>
        </div>
      </div>

      <div className="recent-lessons">
        <h2>Останні пройдені уроки</h2>
        <div className="lessons-container">
          {progressData.recentLessons.map(lesson => (
            <div key={lesson.id} className="lesson-item">
              <h3>{lesson.title}</h3>
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(lesson.score / lesson.maxScore) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-value">{lesson.score}/{lesson.maxScore}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievements-section">
        <h2>Досягнення</h2>
        <div className="achievements-grid">
          {progressData.achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon === "🥇" && <FaTrophy />}
                {achievement.icon === "📚" && <FaBookOpen />}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;