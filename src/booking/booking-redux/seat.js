import React from 'react';

const Seat = ({ seat, onSelectSeat }) => {
  const handleClick = () => {
    onSelectSeat(seat);
  };

  return (
    <div 
      className={seat.daDat ? "gheDuocChon" : "gheDangChon"}
      onClick={handleClick}
    >
      {seat.soGhe}
    </div>
  );
};

export default Seat;
