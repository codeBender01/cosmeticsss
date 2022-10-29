import React from "react";
import productMain from "../images/product/main.png";
import heroProduct from "../images/hero/16k_material_dark_green-wallpaper-1920x1080.jpg";
import nav1 from "../images/product/nav-1.png";
import nav2 from "../images/product/nav-2.png";
import nav3 from "../images/product/nav-3.png";
import nav4 from "../images/product/nav-4.png";
import addSvg from "../images/icons/add.svg";
import product1 from "../images/product/product-1.png";
import product2 from "../images/product/product-2.png";
import product3 from "../images/product/product-3.png";
import product4 from "../images/product/product-4.png";
import product5 from "../images/product/product-5.png";

import { NavLink } from "react-router-dom";

import Slider from "react-slick";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Features from "../components/features/Features";

const images = [
  {
    id: 1,
    img: heroProduct,
  },
  {
    id: 2,
    img: nav2,
  },
  {
    id: 3,
    img: nav3,
  },
  {
    id: 4,
    img: nav4,
  },
  {
    id: 5,
    img: nav1,
  },
  {
    id: 6,
    img: nav2,
  },
  {
    id: 7,
    img: nav3,
  },
];

const labelIds = [
  {
    id: "star1",
  },
  {
    id: "star2",
  },
  {
    id: "star3",
  },
  {
    id: "star4",
  },
  {
    id: "star5",
  },
];

const reviews = [
  {
    id: "review-1",
    labelIds: [
      {
        id: "r1-star1",
      },
      {
        id: "r1-star2",
      },
      {
        id: "r1-star3",
      },
      {
        id: "r1-star4",
      },
      {
        id: "r1-star5",
      },
    ],
  },
  {
    id: "review-2",
    labelIds: [
      {
        id: "r2-star1",
      },
      {
        id: "r2-star2",
      },
      {
        id: "r2-star3",
      },
      {
        id: "r2-star4",
      },
      {
        id: "r2-star5",
      },
    ],
  },
  {
    id: "review-3",
    labelIds: [
      {
        id: "r3-star1",
      },
      {
        id: "r3-star2",
      },
      {
        id: "r3-star3",
      },
      {
        id: "r3-star4",
      },
      {
        id: "r3-star5",
      },
    ],
  },
  {
    id: "review-4",
    labelIds: [
      {
        id: "r4-star1",
      },
      {
        id: "r4-star2",
      },
      {
        id: "r4-star3",
      },
      {
        id: "r4-star4",
      },
      {
        id: "r4-star5",
      },
    ],
  },
];

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

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      infinite: false,
      arrows: true,
      vertical: true,
      verticalSwiping: true,
      //   variableHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 840,
          settings: {
            vertical: null,
            verticalSwiping: false,
            slidesToShow: 5,
          },
        },
      ],
    };

    this.productSection = {
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

    this.reviews = {
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 700,
      cssEase: "ease-in",
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    this.state = {
      selectedImage: null,
      valueInInt: 1,
      resized: null,
      windowWidth: 0,
    };

    this.addToValue.bind(this);
    this.substractFromValue.bind(this);
  }

  setActiveImage(src) {
    this.setState({ selectedImage: src });
  }

  addToValue = () => {
    let newValueInInt = this.state.valueInInt + 1;
    this.setState({ valueInInt: newValueInInt });
  };

  substractFromValue = () => {
    if (this.state.valueInInt > 0) {
      let newValueInInt = this.state.valueInInt - 1;
      this.setState({ valueInInt: newValueInInt });
    }
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });

    if (this.state.windowWidth < 540) {
      this.setState({
        resized: true,
      });
    } else {
      this.setState({
        resized: false,
      });
    }
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.onbeforeunload = function () {
      this.setState({
        resized: false,
      });
    };
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.onbeforeunload = null;
  }

  render() {
    return (
      <>
        <div className="path">
          <div className="auto__container">
            <a href="#" className="path-link">
              LIPS
            </a>
            <a href="#" className="path-link">
              LIP GLOSS
            </a>
          </div>
        </div>
        <section className="info">
          <div className="auto__container">
            <div className="info__inner">
              <div className="info__image">
                <div className="info__image-main">
                  <img
                    src={
                      this.state.selectedImage
                        ? this.state.selectedImage
                        : productMain
                    }
                    alt="shade-lipstick"
                  />
                </div>
                <Slider {...this.settings} className="info__image-nav">
                  {images.map((img) => {
                    return (
                      <span
                        key={img.id}
                        onClick={() => this.setActiveImage(img.img)}
                      >
                        <img src={img.img} alt="nav-image" />
                      </span>
                    );
                  })}
                </Slider>
              </div>
              <div className="info__content">
                <h5>DAZE OF DISCO HIGHLY RATED DIAMOND SHIMMER GLOSS</h5>
                <div className="info__content-row">
                  <span className="info__content-price">$99.99</span>
                  <div className="rating">
                    {labelIds.map((labelId) => {
                      return (
                        <div key={labelId.id}>
                          <input type="radio" name="star" id={labelId.id} />
                          <label htmlFor={labelId.id}>
                            <AiFillStar />
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="info__content-descr">
                  <span>DESCRIPTION</span>
                  <small>Diamond shimmer gloss</small>
                  <p>
                    Diamond Gloss just got an *extra* sprinkle of sparkle –
                    introducing Daze of Disco Highly Rated Diamond Shimmer
                    Gloss, an ultra-clear lip gloss with metallic glitter and
                    brilliant, blinding shine. The non-sticky, high-comfort
                    formula glides on seamlessly for a glossy, diam
                  </p>
                </div>
                <div className="info__content-form">
                  <div className="quantity-toggle">
                    <span id="subtract">
                      <AiOutlineMinus onClick={this.substractFromValue} />
                    </span>
                    <input
                      type="number"
                      id="quantity"
                      value={this.state.valueInInt}
                      onChange={() => this.state.valueInInt}
                    />
                    <span id="add">
                      <AiOutlinePlus onClick={this.addToValue} />
                    </span>
                  </div>
                  <button className="button primary round">Add to cart</button>
                </div>
                <div className="info__content-product">
                  <p>glossy, diam</p>
                  <span>1.23oz/120g</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="auto__container">
            <div className="features__inner">
              <div className="features__row">
                <div className="features__block">
                  <div className="features__title">Ingredients</div>
                  <Features />
                </div>
                <div className="features__block">
                  <div className="features__title">How to use</div>
                  <p>
                    Glide the applicator across lips. Can be used alone for a
                    glossy, shimmering look or on top of your favorite lip color
                    for a touch of high-shine glitter.
                  </p>
                </div>
              </div>
              <div className="features__block">
                <div className="features__title">full ingredient list</div>
                <p>
                  Carthamus Tinctorius (Safflower) Seed Oil, Sorbeth-30
                  Tetraoleate, Olive Oil PEG-7 Esters, Caprylic/capric
                  Triglyceride, Macadamia Ternifolia Seed Oil, Rosa Canina Fruit
                  Oil, Simmondsia Chinensis(Jojoba) Seed Oil, Prunus Amygdalus
                  Dulcis(Sweet Almond) Oil, Vitis Vinifera(Grape) Seed Oil,
                  Prunus Armeniaca(Apricot) Kernel Oil, Olea Europaea(Olive)
                  Fruit Oil, Olea Europaea(Olive) Husk Oil, Rosa Damascena
                  Flower Oil (Bulgarian Rose Oil), Vegetable Oil, Tocophero
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="review__section">
          <div className="auto__container">
            <div className="review__section-inner">
              <h4>What people say</h4>
              <Slider {...this.reviews} className="review__row">
                {reviews.map((rev) => {
                  return (
                    <div className="review" key={rev.id}>
                      <div className="review__inner">
                        <div className="review__inner-image"></div>
                        <div className="review__inner-author">Name Surname</div>
                        <div className="review__inner-date">yesterday</div>
                        <div className="rating">
                          {rev.labelIds.map((labelId) => {
                            return (
                              <div key={labelId.id}>
                                <input
                                  type="radio"
                                  name="r1-star"
                                  id={labelId.id}
                                />
                                <label htmlFor={labelId.id}>
                                  <AiFillStar />
                                </label>
                              </div>
                            );
                          })}
                        </div>
                        <p>
                          ex vel eum lobortis Duis autem dolore euismod aliquam
                          consectetuer adipiscing nulla tincidunt blandit
                          nonummy at vel ut odio elit, nulla te dolore diam
                          consequat. nibh ad volutpat. amet, esse Lorem zzril in
                          aliquip iusto delenit ullamcorper suscipit commodo
                          quis augue eu dolor Ut vero facilisi. enim wisi
                          vulputate dolore
                        </p>
                      </div>
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
              <h3>Best sellers</h3>
              <Slider {...this.productSection} className="product__row slider">
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
      </>
    );
  }
}

export default Product;
