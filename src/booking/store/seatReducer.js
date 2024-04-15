import { SELECT_SEAT } from '../actions/seatActions';
import data from "./data.json"
const initialState = {
  selectedSeats: data
};

const seatReducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload]
      };
    default:
      return state;
  }
};

export default seatReducer;
