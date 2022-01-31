export const ProuctListAction = (userInput) => (dispatch) => {
  dispatch({
    type: "PRODUCT_LIST",
    payload: {
      id: Math.random().toString(),
      title: userInput,
    },
  });
};

export const UserInputAction = (userInput) => (dispatch) => {
  dispatch({
    type: "USER_INPUT",
    payload: userInput,
  });
};
