import React from 'react';
import HomeTitle from '../components/HomeTitle';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        height: '50vh'
      }}
    >
      <HomeTitle title="Posts Project" />
    </div>
  );
};

export default HomePage;
