import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import ProductList from "./components/ProductList/ProductList";
import NewProduct from "./components/NewProduct/NewProduct";

import "./App.css";

function App({ text }) {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
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
