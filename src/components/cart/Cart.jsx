import React, { useState, useRef, useEffect } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const provinces = [
  {
    id: 1,
    name: "Mary",
  },
  {
    id: 2,

    name: "Lebap",
  },
  {
    id: 3,

    name: "Daşoguz",
  },
  {
    id: 4,

    name: "Balkan",
  },
  {
    id: 5,

    name: "Ahal",
  },
  {
    id: 6,

    name: "Aşgabat",
  },
];

function Cart(props) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropIcon = useRef();

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };

  const toggleDropdown = () => setOpen(!isOpen);

  const dropIconAnimate = () => {
    const drop = dropIcon.current;
    drop.classList.toggle("not-active");
  };

  return (
    <>
      <section className={`shop ${props.cartClicked ? "active" : null}`}>
        <div className="shop__inner">
          <div className="shop__order">
            <div className="shop__order-inner">
              <div className="shop__order-header">
                <a href="#" className="shop__order-header-logo">
                  {" "}
                  Beautiful{" "}
                </a>
                <button id="cart-close" onClick={props.cartboxHandler}>
                  Back
                </button>
              </div>
              <form action="post" className="form order">
                <div className="form__title">Shipping address</div>
                <div className="select" onClick={dropIconAnimate}>
                  <span>Region</span>

                  <div className="dropdown-header" onClick={toggleDropdown}>
                    {selectedItem
                      ? provinces.find((item) => item.id === selectedItem).name
                      : "Mary"}

                    <div className="drop-icon" ref={dropIcon}>
                      {/* {isOpen ? (
                        ) } */}
                      <SlArrowUp size={20} />
                    </div>
                  </div>
                  <div
                    className={`dropdown-body ${isOpen && "open"}`}
                    id={props.bodyId}
                  >
                    {provinces.map((item) => (
                      <div
                        className="dropdown-item"
                        onClick={() => handleItemClick(item.id)}
                        id={item.id}
                        key={item.id}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form__row">
                  <input type="text" placeholder="First name" required />
                  <input type="text" placeholder="Last name" required />
                </div>
                <input type="text" placeholder="Address" required />
                <input type="number" placeholder="Phone Number" required />
                <div className="button primary" id="order">
                  Order
                </div>
              </form>
              <div className="shop__order-footer">
                <a href="#">Refund policy </a>
                <a href="#">Shipping policy</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms of service</a>
              </div>
            </div>
          </div>
          <div className="shop__cart">
            <div className="shop__cart-inner">
              <div className="shop__cart-products"></div>
              <div className="shop__cart-price">
                <div className="shop__cart-price-block">
                  <div className="shop__cart-price-row">
                    <p>Subtotal</p>
                    <span id="subTotal">0</span>
                  </div>
                  <div className="shop__cart-price-row">
                    <p>Shipping</p>
                    <span id="shipping">0</span>
                  </div>
                </div>
                <div className="shop__cart-price-block">
                  <div className="shop__cart-price-row">
                    <p className="big">total</p>
                    <span className="big" id="total">
                      0
                    </span>
                  </div>
                </div>
              </div>
              <button className="button primary round">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
