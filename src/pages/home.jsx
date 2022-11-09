import React from "react";
import hero from "../images/hero/hero.png";
import product1 from "../images/product/product-1.png";
import product2 from "../images/product/product-2.png";
import product3 from "../images/product/product-3.png";
import product4 from "../images/product/product-4.png";
import product5 from "../images/product/product-5.png";

import partner1 from "../images/partners/partner-1.png";
import partner2 from "../images/partners/partner-2.png";
import partner3 from "../images/partners/partner-3.png";
import partner4 from "../images/partners/partner-4.png";
import partner5 from "../images/partners/partner-5.png";
import partner6 from "../images/partners/partner-6.png";
import partner7 from "../images/partners/partner-7.png";
import partner8 from "../images/partners/partner-8.png";
import partner9 from "../images/partners/partner-9.png";
import partner10 from "../images/partners/partner-10.png";
import partner11 from "../images/partners/partner-11.png";

import addSvg from "../images/icons/add.svg";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const bestSellerProducts = [
  {
    id: "productContainer1",
    products: [
      {
        id: "product-1",
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
        id: "product-2",
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
    ],
  },

  {
    id: "productContainer2",
    products: [
      {
        id: "product-3",
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
        id: "product-4",
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
    ],
  },

  {
    id: "productContainer3",
    products: [
      {
        id: "product-5",
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
        id: "product-6",
        img: product2,
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
    ],
  },
];

const partnersImage = [
  {
    img: partner1,
  },
  {
    img: partner2,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
  {
    img: partner6,
  },
  {
    img: partner7,
  },
  {
    img: partner8,
  },
  {
    img: partner9,
  },
  {
    img: partner10,
  },
  {
    img: partner11,
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  }
  render() {
    return (
      <>
        <section className="hero">
          <div className="hero__image">
            <img src={hero} alt="" />
          </div>
        </section>
        <section className="product__section">
          <div className="auto__container">
            <div className="product__section-inner">
              <h3>Best sellers</h3>
              <Slider {...this.settings} className="product__row slider">
                {bestSellerProducts.map((bsp) => {
                  return (
                    <div className="product__container" key={bsp.id}>
                      {bsp.products.map((product) => {
                        return (
                          <div
                            className="product on-sale"
                            id={product.id}
                            key={product.id}
                          >
                            <span className="product__discount">sale 60%</span>
                            <button className="product__add-cart">
                              <img src={addSvg} alt="add-cart" />
                            </button>
                            <div className="product__inner">
                              <div className="product__inner-image">
                                <img src={product.img} alt="product" />
                              </div>
                              <NavLink
                                to="/product"
                                className="product__inner-content"
                              >
                                <div className="product__inner-company">
                                  Company Name
                                </div>
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
                                {product.labelsId.map((labelId) => {
                                  return (
                                    <div key={labelId.id}>
                                      <input
                                        type="radio"
                                        name="p1-star"
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
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
        <section className="product__section">
          <div className="auto__container">
            <div className="product__section-inner">
              <h3>Products</h3>
              <div className="product__row">
                {this.props.products.map((product, idx) => {
                  return (
                    <div className="product" id={product.id} key={product.id}>
                      <button className="product__add-cart">
                        <img src={addSvg} alt="add-cart" />
                      </button>
                      <div className="product__inner">
                        <div className="product__inner-image">
                          <img src={product.img} alt="product" />
                        </div>
                        <NavLink
                          to="/product"
                          className="product__inner-content"
                        >
                          <div className="product__inner-company">
                            Company Name
                          </div>
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
                                  name={labelId.id}
                                  id={labelId}
                                />
                                <label htmlFor={labelId}>
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
        <section className="partner__section">
          <div className="auto__container">
            <div className="partner__section-inner">
              <h3>Partners</h3>
              <div className="partner__row">
                {partnersImage.map((partner) => {
                  return (
                    <div className="partner" key={partner.img}>
                      <img src={partner.img} alt="partner" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(Home);
