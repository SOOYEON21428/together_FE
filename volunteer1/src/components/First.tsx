import React from 'react';
import '../styles/First.css';

const Main: React.FC = () => {
  const handleFindVolunteerClick = () => {
    window.location.href = 'volunteer';
  };

  const handleJoinEmergencyClick = () => {
    window.location.href = 'emergency';
  };

  return (
    <div className="container" style={{ width: '100%', height: '100vh' }}>
      <div className="main-screen">
        <header className="header">
          <img src="/images/image 23.png" alt="search" />
          <div className="center-image-container">
            <img className="center-image" src="images/first.png" alt="투게더!" />
          </div>
          <img src="/images/alert.png" alt="alert" className="alert-icon" />
        </header>
        <div className="content">
          <div className="intro">
            <h1>사회 공헌 활동</h1>
            <p>쉽고 빠르게 봉사 활동에 참여하세요.</p>
          </div>
          <div className="activity-card" id="find-volunteer" onClick={handleFindVolunteerClick}>
            <h2>가까운 봉사 활동 찾기</h2>
            <p>주변에서 진행 중인 봉사 활동을 찾아보세요.</p>
          </div>
          <div className="activity-card" id="join-emergency" onClick={handleJoinEmergencyClick}>
            <h2>긴급 구호 활동 참여</h2>
            <p>도움이 필요한 곳에 즉시 지원하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;