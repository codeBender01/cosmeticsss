import React from "react";
import productMain from "../images/product/main.png";
import heroProduct from "../images/hero/16k_material_dark_green-wallpaper-1920x1080.jpg";
import nav1 from "../images/product/nav-1.png";
import nav2 from "../images/product/nav-2.png";
import nav3 from "../images/product/nav-3.png";
import nav4 from "../images/product/nav-4.png";
import Slider from "react-slick";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

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

    this.state = {
      selectedImage: null,
      valueInInt: 1,
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
      </>
    );
  }
}

export default Product;
