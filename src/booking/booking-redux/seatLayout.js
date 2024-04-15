import React, { Component } from 'react';
import Seat from './seat';

export default class SeatLayout extends Component {
  render() {
    const { seats, onSelectSeat } = this.props;

    return (
      <div className="seatLayout">
        {seats.map(seat => (
          <Seat 
            key={seat.soGhe}
            seat={seat} 
            onSelectSeat={onSelectSeat} 
          />
        ))}
      </div>
    );
  }
}


