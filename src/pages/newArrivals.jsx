import React from "react";
import bgNew from "../images/hero/hero-2.png";
import product1 from "../images/product/product-1.png";
import product2 from "../images/product/product-2.png";
import product3 from "../images/product/product-3.png";
import product4 from "../images/product/product-4.png";
import product5 from "../images/product/product-5.png";
import product6 from "../images/product/product-6.png";
import product7 from "../images/product/product-7.png";
import product8 from "../images/product/product-8.png";
import product9 from "../images/product/product-9.png";
import product10 from "../images/product/product-10.png";
import product11 from "../images/product/product-11.png";
import addSvg from "../images/icons/add.svg";
import { AiFillStar } from "react-icons/ai";

const newArrivalsProducts = [
  {
    id: "pr1",
    img: product1,
    labelsId: [
      {
        id: "p1-star1",
      },
      {
        id: "p1-star2",
      },
      {
        id: "p1-star3",
      },
      {
        id: "p1-star4",
      },
      {
        id: "p1-star5",
      },
    ],
  },
  {
    id: "pr2",
    img: product2,
    labelsId: [
      {
        id: "p2-star1",
      },
      {
        id: "p2-star2",
      },
      {
        id: "p2-star3",
      },
      {
        id: "p2-star4",
      },
      {
        id: "p2-star5",
      },
    ],
  },
  {
    id: "pr3",
    img: product3,
    labelsId: [
      {
        id: "p3-star1",
      },
      {
        id: "p3-star2",
      },
      {
        id: "p3-star3",
      },
      {
        id: "p3-star4",
      },
      {
        id: "p3-star5",
      },
    ],
  },
  {
    id: "pr4",
    img: product4,
    labelsId: [
      {
        id: "p4-star1",
      },
      {
        id: "p4-star2",
      },
      {
        id: "p4-star3",
      },
      {
        id: "p4-star4",
      },
      {
        id: "p4-star5",
      },
    ],
  },
  {
    id: "pr5",
    img: product5,
    labelsId: [
      {
        id: "p5-star1",
      },
      {
        id: "p5-star2",
      },
      {
        id: "p5-star3",
      },
      {
        id: "p5-star4",
      },
      {
        id: "p5-star5",
      },
    ],
  },
  {
    id: "pr6",
    img: product6,
    labelsId: [
      {
        id: "p6-star1",
      },
      {
        id: "p6-star2",
      },
      {
        id: "p6-star3",
      },
      {
        id: "p6-star4",
      },
      {
        id: "p6-star5",
      },
    ],
  },
  {
    id: "pr7",
    img: product7,
    labelsId: [
      {
        id: "p7-star1",
      },
      {
        id: "p7-star2",
      },
      {
        id: "p7-star3",
      },
      {
        id: "p7-star4",
      },
      {
        id: "p7-star5",
      },
    ],
  },
  {
    id: "pr8",
    img: product8,
    labelsId: [
      {
        id: "p8-star1",
      },
      {
        id: "p8-star2",
      },
      {
        id: "p8-star3",
      },
      {
        id: "p8-star4",
      },
      {
        id: "p8-star5",
      },
    ],
  },
  {
    id: "pr9",
    img: product9,
    labelsId: [
      {
        id: "p9-star1",
      },
      {
        id: "p9-star2",
      },
      {
        id: "p9-star3",
      },
      {
        id: "p9-star4",
      },
      {
        id: "p9-star5",
      },
    ],
  },
  {
    id: "pr10",
    img: product10,
    labelsId: [
      {
        id: "p10-star1",
      },
      {
        id: "p10-star2",
      },
      {
        id: "p10-star3",
      },
      {
        id: "p10-star4",
      },
      {
        id: "p10-star5",
      },
    ],
  },
  {
    id: "pr11",
    img: product11,
    labelsId: [
      {
        id: "p11-star1",
      },
      {
        id: "p11-star2",
      },
      {
        id: "p11-star3",
      },
      {
        id: "p11-star4",
      },
      {
        id: "p11-star5",
      },
    ],
  },
  {
    id: "pr12",
    img: product1,
    labelsId: [
      {
        id: "p12-star1",
      },
      {
        id: "p12-star2",
      },
      {
        id: "p12-star3",
      },
      {
        id: "p12-star4",
      },
      {
        id: "p12-star5",
      },
    ],
  },
];

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
                {newArrivalsProducts.map((product) => {
                  return (
                    <div className="product" id={product.id} key={product.id}>
                      <button className="product__add-cart">
                        <img src={addSvg} alt="add-cart" />
                      </button>
                      <div className="product__inner">
                        <div className="product__inner-image">
                          <img src={product.img} alt="product" />
                        </div>
                        <div className="product__inner-company">
                          Company Name
                        </div>
                        <a
                          href="product.html"
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
                        </a>
                        <div className="rating">
                          {product.labelsId.map((labelId) => {
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

export default NewArrivals;
