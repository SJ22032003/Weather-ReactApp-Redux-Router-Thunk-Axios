const initialState = JSON.parse(localStorage.getItem("favourite")) || {
  data: [],
};

const FavReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "FAVOURITE_WEATHER":
      newState = {
        ...state,
        data: [...state.data, action.payload],
      };
      localStorage.setItem("favourite", JSON.stringify(newState));
      return newState;

    case "DELETE_FAVOURITE_WEATHER":
      newState = {
        ...state,
        data: state.data.filter((item) => item.city !== action.payload),
      };
      localStorage.setItem("favourite", JSON.stringify(newState));
      return newState;

    case "REMOVE_FAV":
      newState = {
        ...state,
        data: state.data.filter((item) => item.city !== action.payload),
      }
      localStorage.setItem("favourite", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default FavReducer;
