import React from 'react';
import { useSelector } from 'react-redux';

const Payment = () => {
  const selectedSeats = useSelector(state => state.selectedSeats);

  return (
    <div>
      <h2>Payment</h2>
      <p>Selected Seats:</p>
      <ul>
        {selectedSeats.map(seat => (
          <li key={seat.soGhe}>{seat.soGhe}</li>
        ))}
      </ul>
      {/* Add payment form here */}
    </div>
  );
};

export default Payment;
