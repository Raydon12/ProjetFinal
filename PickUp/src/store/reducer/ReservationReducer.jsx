const initialState = {
  date: null,
  reserveUser: null,
  slot: null,
};

function ReducerReservation(state = initialState, action) {
  switch (action.type) {
    case "Reservation":
      return {
        ...state,
        date: action.value,
      };
    case "LISTE_RESERVATION":
      return {
        //...state,
        reserveUser: action.value,
      };
    case "DATE":
      return {
        slot: action.value,
      };
    default:
      return state;
  }
}
export default ReducerReservation;
