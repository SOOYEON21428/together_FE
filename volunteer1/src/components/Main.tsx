import React from 'react';
import '../styles/Main.css';

const Main: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/first';
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="image-wrapper">
        <img src="/images/image-22.png" alt="" />
      </div>
      <div className="image-wrapper">
        <img src="/images/image-6.png" alt="" />
      </div>
      <div className="image-wrapper">
        <img src="/images/image-2.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
