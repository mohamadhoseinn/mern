import { useContext } from "react";
import PropTypes from "prop-types";

import ProductContext from "../../context/ProductContext";

import "./NewProduct.css";

const NewProduct = ({ NameButton }) => {
  const { userInput, userInputHandler, addProductHandler } =
    useContext(ProductContext);

  return (
    <div className="new-product">
      <form onSubmit={addProductHandler}>
        <input type="text" value={userInput} onChange={userInputHandler} />
        <button type="submit">{NameButton}</button>
      </form>
    </div>
  );
};

NewProduct.defaultProps = {
  NameButton: "Add Product",
};

NewProduct.propTypes = {
  NameButton: PropTypes.string.isRequired,
};

export default NewProduct;
