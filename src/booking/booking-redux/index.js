import React, { Component } from "react";
import SeatSelection from "./seatSelection";
import Payment from "./payment";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
         <div className="App">
        <SeatSelection />
        <Payment />
      </div>
      </div>
    );
  }
}
