import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import minus from "../../../images/icons/subtract.svg";
import add from "../../../images/icons/add-black.svg";

function AddedProduct(props) {
  const [productQuantity, setProductQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(99);
  const shipping = 99;

  const addToProductQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const substractFromProductQuantity = () => {
    if (productQuantity === 1) {
      return;
    }

    setProductQuantity(productQuantity - 1);
  };

  return (
    <div className="shop__cart-product">
      <div className="shop__cart-product-image">
        <span>{productQuantity}</span>
        <img src={`${props.imageSource}`} />
      </div>
      <div className="shop__cart-product-content">
        <div className="shop__cart-product-col">
          <div className="shop__cart-product-title">{props.name}</div>
          <div className="shop__cart-product-quantity">
            <span id="subtract" onClick={substractFromProductQuantity}>
              <img src={minus} alt="subtract" />
            </span>
            <input type="number" id="quantity" value={productQuantity} />
            <span id="add" onClick={addToProductQuantity}>
              <img src={add} alt="add" />
            </span>
          </div>
        </div>
        <div className="shop__cart-product-col">
          <div className="shop__cart-product-price">{props.price}</div>
          <button className="shop__cart-product-delete">
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedProduct;
