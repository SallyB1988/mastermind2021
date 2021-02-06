const colors = ["red", "yellow", "green", "blue", "black", "white"];

const initialState = {
  submit: false,
  selected: [],
  colors: colors,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SELECT_COLOR":
      return {
        ...state,
        selected: [...newState.selected, action.payload],
      };
    default:
      return newState;
  }
};

export default reducer;
