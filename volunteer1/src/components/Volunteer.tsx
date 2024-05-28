import React, { useState, useEffect } from 'react';
import '../styles/Volunteer.css';

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Volunteer: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities([
      {
        id: 1,
        title: '어르신 돌봄 봉사',
        description: '혼자 계신 어르신들과 시간 보내기',
        image: '/images/senior.png'
      },
      {
        id: 2,
        title: '아이 돌봄 봉사',
        description: '저소득가정 아이들을 위한 무료 학습 보조',
        image: '/images/children.png'
      },
      {
        id: 3,
        title: '장애인 박물관 관람 도우미',
        description: '관람의 어려움을 느끼지 않도록 보조',
        image: '/images/disable.png'
      }
    ]);
  }, []);

  return (
    <div className="container">
      <div className="main-screen">
        <div className="header">
          <img src="/images/image 23.png" alt="search" />
          <div className="center-image-container">
            <img className="center-image" src="/images/first.png" alt="투게더!" />
          </div>
          <img src="/images/alert.png" alt="alert" className="alert-icon"/>
        </div>
        <div className="banner-container">
        <div className="banner">
        <img src="/images/volunteer1.png" alt="배너 이미지" className="banner-image"/>
        </div>
        </div>


        <main>
          {activities.map(activity => (
            <div className="activity" key={activity.id}>
              <img src={activity.image} alt={activity.title} />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button>신청하기</button>
            </div>
          ))}
        </main>
      </div>
      <div className="bottom">
        <img src="/images/menu.png" alt="menu" className="icon"/>
        <img src="/images/home.png" alt="home" className="icon"/>
        <img src="/images/my.png" alt="my" className="icon"/>
      </div>
    </div>
   );
}

export default Volunteer;
