import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="glass-card">
        <h2>🌾 Welcome to AgriConnect</h2>
        <p>
          “Agriculture is the most healthful, most useful and most noble employment of man.” – George Washington<br /><br />
          “The farmer has to be an optimist or he wouldn’t still be a farmer.” – Will Rogers<br /><br />
          “To make agriculture sustainable, the grower has got to be able to make a profit.” – Sam Farr
        </p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
