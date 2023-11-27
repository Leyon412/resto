// Home.js

import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="home-container">
      <div className="background-imag"></div>
      <div className="centered-text">
        <h1>Welcome to Your Restaurant</h1>
        <p>Discover our delicious menu and enjoy a wonderful dining experience.</p>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Home;
