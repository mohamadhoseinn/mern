import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  ProuctListAction,
  UserInputAction,
} from "../../redux/productList/ProductList-action";

import "./NewProduct.css";

const NewProduct = ({ NameButton }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { userInput } = productList;

  const addProductHandler = (e) => {
    e.preventDefault();

    dispatch(ProuctListAction(userInput));
    dispatch(UserInputAction(""));
  };

  const userInputHanler = (e) => {
    const amir = e.target.value;
    dispatch(UserInputAction(amir));
  };

  return (
    <div className="new-product">
      <form onSubmit={addProductHandler}>
        <input type="text" onChange={userInputHanler} value={userInput} />
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
