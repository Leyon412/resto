// BookingDetails.js

import React, { useState, useEffect } from 'react';
const BookingDetails = ({ card, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numRooms, setNumRooms] = useState(1);
  const [totalAmount, setTotalAmount] = useState(card.perNightAmount);
  const [paymentStatus, setPaymentStatus] = useState(false);

  useEffect(() => {
    // Recalculate the total amount when the number of rooms changes
    setTotalAmount(numRooms * card.perNightAmount);
  }, [numRooms, card.perNightAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment logic (replace with actual logic)
    setTimeout(() => {
      setPaymentStatus(true);
    }, 2000);
  };

  return (
    <div className="booking-form">
      <h2>Book {card.title}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Number of Rooms:
          <input
            type="number"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)}
            min="1"
            required
          />
        </label>
        <label>
          Per Night Amount:
          <span>${card.perNightAmount}</span>
        </label>
        <label>
          Total Amount:
          <span>${totalAmount}</span>
        </label>
        <button type="submit" disabled={paymentStatus}>
          {paymentStatus ? 'Paid' : 'Pay Now'}
        </button>
      </form>
      <div className="qr-code">
        <p>Scan the GPay QR code to complete the payment:</p>
        <img src={`gpay-qr-code.png?amount=${totalAmount}`} alt="GPay QR Code" />
      </div>
      {paymentStatus && <p className="booking-status">Booking completed!</p>}
      <button className="back-button" onClick={onBack}>
        Go Back
      </button>
    </div>
  );
};

export default BookingDetails;
