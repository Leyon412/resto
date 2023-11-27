// Booking.js

import React, { useState } from 'react';
import '../styles/Booking.css';
import BookingDetails from './BookingDetails';
import '../styles/BookingDetails.css';
const Booking = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const cards = [
    {
      title: 'Suite',
      description: 'Spacious and luxurious suite with a beautiful view.',
      perNightAmount: 150,
    },
    {
      title: 'Studio',
      description: 'Modern and cozy studio with all the amenities.',
      perNightAmount: 100,
    },
    {
      title: 'Luxury',
      description: 'Elegant and sophisticated luxury accommodation.',
      perNightAmount: 200,
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setShowBookingForm(true);
  };

  const handleBackToCards = () => {
    setShowBookingForm(false);
    setSelectedCard(null);
  };

  return (
    <div className="booking-container">
      {showBookingForm ? (
        <BookingDetails card={cards[selectedCard]} onBack={handleBackToCards} />
      ) : (
        <div className="cards">
          {cards.map((card, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(index)}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>Per Night: ${card.perNightAmount}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
