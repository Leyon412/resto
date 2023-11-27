// Room.js

import React, { useState } from 'react';
import BookingDetails from './BookingDetails';

const Room = ({ index, selected, onRoomClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleRoomClick = () => {
    onRoomClick(index);
    setShowDetails(!showDetails);
  };

  return (
    <div className={`room ${selected ? 'selected' : ''}`} onClick={handleRoomClick}>
      <div className="room-content">
        <div className="room-header">
          <span>Room {index + 1}</span>
          {selected && <span className="status">Selected</span>}
        </div>
        {selected && showDetails && (
          <div className="booking-form">
            <BookingDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default Room;
