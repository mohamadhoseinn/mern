export const InputVlueAction = (value) => (dispatch) => {
  dispatch({ type: "VALUE", payload: value });
};

export const InputIsValidAction = () => (dispatch) => {
  dispatch({ type: "ISVALID", payload: true });
};
