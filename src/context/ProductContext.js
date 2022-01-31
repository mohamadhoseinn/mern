import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 4" },
  ]);
  const [userInput, setUserInput] = useState("");

  const addProductHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      id: Math.random().toString(),
      title: userInput,
    };
    setUserInput("");
    setProducts((prevProducts) => {
      return [...prevProducts, newProduct];
    });
    console.log(products.concat(newProduct));
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <ProductContext.Provider
      value={{ products, userInput, addProductHandler, userInputHandler }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
