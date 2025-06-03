export const lessonsData = [
  {
    id: 1,
    title: "Основи експозиції",
    lessonsCount: 3,
    duration: " 45 хвилин",
    description: "Вивчіть основи експозиції, композиції та роботи з камерою",
    materials: [
      "Що таке діафрагма, витримка, ISO",
      "Як вони взаємодіють",
      "Практичні приклади"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Композиція в фотографії",
    lessonsCount: 4,
    duration: " 1 година",
    description: "Основи композиції та правила побудови кадру",
    materials: [
      "Правило третин",
      "Лінії та форми",
      "Баланс у кадрі"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Робота зі світлом",
    lessonsCount: 5,
    duration: " 1.5 години",
    description: "Як правильно використовувати світло у фотографії",
    materials: [
      "Види освітлення",
      "Робота з природним світлом",
      "Використання штучного світла"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Портретна зйомка",
    lessonsCount: 4,
    duration: " 1 година",
    description: "Техніки та секрети портретної зйомки",
    materials: [
      "Робота з моделлю",
      "Використання світла",
      "Пози та ракурси"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const galleryData = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/736x/3a/32/ba/3a32ba8251e5d8ed68c417f012e02bd9.jpg",
    title: "Чоловічий портрет",
    author: "Олена Петренко",
    type: "portrait"
  },
  {
    id: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSaBHDbaN-wOP3hRzpDgu7TA9wKyjFGvAiQ&s",
    title: "Лісний пейзаж",
    author: "Іван Сидоренко",
    type: "landscape"
  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/736x/d8/77/91/d87791396af4a41964b70d4634009579.jpg",
    title: "Роса",
    author: "Марія Коваль",
    type: "macro"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Гірський пейзаж",
    author: "Андрій Шевченко",
    type: "landscape"
  },
  {
    id: 5,
    imageUrl: "https://cdn.shopify.com/s/files/1/0150/3760/files/MG_1388_1.jpg?v=1551491095",
    title: "Вулична фотографія",
    author: "Олексій Іваненко",
    type: "street"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Жіночий портрет",
    author: "Наталія Бойко",
    type: "portrait"
  }
];

export const completedLessonsData = [
  {
    id: 1,
    name: "Основи експозиції",
    score: 9.2
  },
  {
    id: 2,
    name: "Композиція в фотографії",
    score: 8.7
  },
  {
    id: 3,
    name: "Робота зі світлом",
    score: 7.5
  }
];

export const featuresData = [
  {
    icon: "fas fa-video",
    title: "Відеоуроки",
    description: "Доступні відеоуроки з технік зйомки, обробки фото та роботи з обладнанням"
  },
  {
    icon: "fas fa-book-open",
    title: "Текстові матеріали",
    description: "Детальні гайди та інструкції для самостійного вивчення"
  },
  {
    icon: "fas fa-tasks",
    title: "Практичні завдання",
    description: "Реальні завдання для закріплення навичок"
  }
];

export const getPhotoTypeName = (type) => {
  const types = {
    'portrait': 'Портрет',
    'landscape': 'Пейзаж',
    'macro': 'Макро',
    'street': 'Вулиця'
  };
  return types[type] || type;
};

export const progressData = {
  generalStats: {
    completionPercentage: 35, // Має бути число
    completedLessons: 8,      // Має бути число
    averageScore: 4.8         // Має бути число
  },
  
  // Останні пройдені уроки
  recentLessons: [
    {
      id: 1,
      title: "Основи експозиції",
      score: 8.2,
      maxScore: 10,
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Композиція в фотографії",
      score: 8.7,
      maxScore: 10,
      date: "2024-03-18"
    },
    {
      id: 3,
      title: "Робота зі світлом",
      score: 7.5,
      maxScore: 10,
      date: "2024-03-20"
    }
  ],

  // Досягнення
  achievements: [
    {
      id: 1,
      title: "Перший крок",
      icon: "🥇",
      description: "Завершено перший урок"
    },
    {
      id: 2,
      title: "Активний студент",
      icon: "📚",
      description: "Пройдено 5+ уроків"
    }
  ]
};