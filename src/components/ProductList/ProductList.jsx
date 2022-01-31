import PropTypes from "prop-types";

import "./ProductList.css";

const ProductList = ({ item }) => {
  return (
    <div>
      <ul className="product-list">
        <li>{item.title}</li>
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductList;
