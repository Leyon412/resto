// Menu.js

import React from 'react';
import '../styles/Menu.css';
import log from '../images/breakfast-1804457_1920.jpg';
import lo from '../images/pancakes-2291908_1920.jpg';
import logo from '../images/food-712665_1920.jpg';
const Menu = () => {
  return (
    <div>
      <h2>Menu</h2>

      <section className="menu-section">
        <h3>Breakfast</h3>
        <div className="menu-item">
          <img src={log} alt="Breakfast Dish 1" />
          <div>
            <h4>Breakfast Dish 1</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $10.99</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={lo} alt="Breakfast Dish 2" />
          <div>
            <h4>Breakfast Dish 2</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $8.99</p>
          </div>
        </div>
        {/* Add more breakfast items */}
      </section>

      <section className="menu-section">
        <h3>Lunch</h3>
        <div className="menu-item">
          <img src={logo} alt="Lunch Dish 1" />
          <div>
            <h4>Lunch Dish 1</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $12.99</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={log} alt="Lunch Dish 2" />
          <div>
            <h4>Lunch Dish 2</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $15.99</p>
          </div>
        </div>
        {/* Add more lunch items */}
      </section>

      <section className="menu-section">
        <h3>Dinner</h3>
        <div className="menu-item">
          <img src={lo} alt="Dinner Dish 1" />
          <div>
            <h4>Dinner Dish 1</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $18.99</p>
          </div>
        </div>

        <div className="menu-item">
          <img src={logo} alt="Dinner Dish 2" />
          <div>
            <h4>Dinner Dish 2</h4>
            <p>Description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Price: $22.99</p>
          </div>
        </div>
        {/* Add more dinner items */}
      </section>
    </div>
  );
};

export default Menu;
