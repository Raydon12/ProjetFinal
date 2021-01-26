const initialState = {
  image: null,
};

function ReducerImage(state = initialState, action) {
  switch (action.type) {
    case "AJOUT_IMAGE":
      return {
        image: action.value,
      };

    default:
      return state;
  }
}
export default ReducerImage;
