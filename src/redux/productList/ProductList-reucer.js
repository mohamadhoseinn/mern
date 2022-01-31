const initialState = {
  products: [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 4" },
  ],
  userInput: "",
};

const ProductListReucer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "USER_INPUT":
      return {
        ...state,
        userInput: action.payload,
      };
    default:
      return state;
  }
};

export default ProductListReucer;
