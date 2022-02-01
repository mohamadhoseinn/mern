const initialState = {
  value: "",
  isValid: false,
};

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "ISVALID":
      return {
        ...state,
        isValid: action.payload,
      };
    default:
      return state;
  }
};
export default InputReducer;
