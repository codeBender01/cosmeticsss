import React from "react";
import bgNew from "../images/hero/hero-2.png";

import addSvg from "../images/icons/add.svg";

import { connect } from "react-redux";
import { addProductToTheCart } from "../store/productInfo/productInfo";
import { AiFillStar } from "react-icons/ai";

import { NavLink } from "react-router-dom";

class NewArrivals extends React.Component {
  render() {
    return (
      <>
        <section className="hero new-arrivals">
          <div className="hero__image">
            <img src={bgNew} alt="" />
            <span>New Arrivals</span>
          </div>
        </section>
        <section className="product__section">
          <div className="auto__container">
            <div className="product__section-inner">
              <div className="product__row new-arrivals">
                {this.props.newArrivalProducts.map((product) => {
                  return (
                    <div className="product" id={product.id} key={product.id}>
                      <button
                        className="product__add-cart"
                        onClick={() =>
                          this.props.addProductToTheCart(product.id)
                        }
                      >
                        <img src={addSvg} alt="add-cart" />
                      </button>
                      <div className="product__inner">
                        <div className="product__inner-image">
                          <img src={product.img} alt="product" />
                        </div>
                        <div className="product__inner-company">
                          Company Name
                        </div>
                        <NavLink
                          to="/product"
                          className="product__inner-content"
                        >
                          <h6>Product Name</h6>
                          <div className="product__inner-price">
                            <span className="product__inner-price-old">
                              $99
                            </span>
                            <span className="product__inner-price-new">
                              $99
                            </span>
                          </div>
                        </NavLink>
                        <div className="rating">
                          {product.labelIds.map((labelId) => {
                            return (
                              <div key={labelId.id}>
                                <input
                                  type="radio"
                                  name="p6-star"
                                  id={labelId.id}
                                />
                                <label htmlFor={labelId.id}>
                                  <AiFillStar />
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="product__pages">
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">...</a>
                <a href="#">9</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  newArrivalProducts: state.products.products,
  productsInCart: state.products.productsInCart,
});

const mapDispatchToProps = { addProductToTheCart };

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);
