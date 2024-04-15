import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSeat } from '../store/seatAction';
import SeatLayout from './seatLayout';

class SeatSelection extends Component {
  render() {
    const { seats, handleSelectSeat } = this.props;

    return (
      <div>
        <h2>Select Your Seats</h2>
        <SeatLayout seats={seats} onSelectSeat={handleSelectSeat} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    seats: state.seats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectSeat: seat => dispatch(selectSeat(seat))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelection);
