import { useContext } from "react";
import PropTypes from "prop-types";

import ProductList from "./components/ProductList/ProductList";
import NewProduct from "./components/NewProduct/NewProduct";
import ProductContext from "./context/ProductContext";

import "./App.css";

function App({ text }) {
  const { products } = useContext(ProductContext);

  return (
    <div className="App">
      <h2>{text}</h2>
      <NewProduct />
      {products.map((item) => {
        return <ProductList key={item.id} item={item} />;
      })}
    </div>
  );
}

App.defaultProps = {
  text: "Book Store",
};

ProductList.propTypes = {
  text: PropTypes.string,
};

export default App;
