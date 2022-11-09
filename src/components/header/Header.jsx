import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as SearchIcon } from "../../images/icons/search.svg";
import { ReactComponent as CartIcon } from "../../images/icons/cart.svg";
import { ReactComponent as Account } from "../../images/icons/user.svg";
import { NavLink } from "react-router-dom";
import { filterProductsInCart } from "../../store/productInfo/productInfo";
import { useDispatch } from "react-redux";
import cross from "../../images/icons/cross.svg";
import Cart from "../cart/Cart";

const drops = [
  {
    id: 1,
    title: "Face",
    innerContent: [
      {
        id: 1,
        text: "False eyelashes",
      },
      {
        id: 2,
        text: "EyeLiner",
      },
      {
        id: 3,
        text: "Eyebrow",
      },
      {
        id: 4,
        text: "Mascara",
      },
    ],
  },
  {
    id: 2,
    title: "Eyes",
    innerContent: [
      {
        id: 1,
        text: "False eyelashes",
      },
      {
        id: 2,
        text: "EyeLiner",
      },
      {
        id: 3,
        text: "Eyebrow",
      },
      {
        id: 4,
        text: "Mascara",
      },
    ],
  },
  {
    id: 3,
    title: "Lips",
    innerContent: [
      {
        id: 1,
        text: "False eyelashes",
      },
      {
        id: 2,
        text: "EyeLiner",
      },
      {
        id: 3,
        text: "Eyebrow",
      },
      {
        id: 4,
        text: "Mascara",
      },
    ],
  },
  {
    id: 4,
    title: "Bath/body",
    innerContent: [
      {
        id: 1,
        text: "False eyelashes",
      },
      {
        id: 2,
        text: "EyeLiner",
      },
      {
        id: 3,
        text: "Eyebrow",
      },
      {
        id: 4,
        text: "Mascara",
      },
    ],
  },
  {
    id: 5,
    title: "Collections",
    innerContent: [
      {
        id: 1,
        text: "False eyelashes",
      },
      {
        id: 2,
        text: "EyeLiner",
      },
      {
        id: 3,
        text: "Eyebrow",
      },
      {
        id: 4,
        text: "Mascara",
      },
    ],
  },
];

function Header() {
  const refHeader = useRef();
  const refNav = useRef();
  const refMenuBtn = useRef();
  const body = document.body;
  const [activeNav, setActiveNav] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  useEffect(() => {
    const menuBtn = refMenuBtn.current;
    const nav = refNav.current;
    const body = document.body;
    const navBtns = document.querySelectorAll(".nav__inner-button");
    const navDrops = document.querySelectorAll(".nav__inner-content");

    window.addEventListener("click", (event) => {
      if (event.target == nav) {
        nav.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("active");
      }
    });

    window.addEventListener("scroll", () => {
      const header = refHeader.current;

      if (header) {
        if (window.pageYOffset > header.offsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
        if (window.innerWidth > 840) {
          if (window.pageYOffset > header.clientHeight) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        } else {
          setIsSticky(false);
        }
      }
    });

    body.addEventListener("click", () => {
      navBtns.forEach((navBtn) => {
        navBtn.classList.remove("active");
      });
      navDrops.forEach((navDrop) => {
        navDrop.classList.remove("active");
      });
    });

    if (cartClicked) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }
  });

  const burgerMenuHandler = () => {
    const nav = refNav.current;
    const menuBtn = refMenuBtn.current;
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };

  const navClickHandler = (id, event) => {
    if (event.currentTarget) {
      event.stopPropagation();
    }

    setSelectedNav(id);
    setActiveNav(!activeNav);
    console.log(selectedNav);
  };

  const searchBoxHandler = () => {
    setSearchClicked(!searchClicked);
  };

  const cartboxHandler = () => {
    setCartClicked(!cartClicked);
  };

  return (
    <>
      <header
        className={`header ${isSticky ? "sticky" : null}`}
        ref={refHeader}
      >
        <div className="auto__container">
          <div className="header__inner">
            {/* <!-- Search Box --> */}
            <div
              className={`search__box ${searchClicked ? "active" : null}`}
              id="search__box"
            >
              <input type="text" placeholder="Search" />
              <span id="search-close" onClick={searchBoxHandler}>
                <img src={cross} alt="cross" />
              </span>
            </div>
            {/* <!-- Burger --> */}
            <div
              className="burger"
              id="burger"
              onClick={burgerMenuHandler}
              ref={refMenuBtn}
            >
              <div className="burger-item"></div>
            </div>
            {/* <!-- Header Content --> */}
            <div className="header__inner-content">
              <NavLink to="/" className="header__inner-logo">
                {" "}
                Beautiful{" "}
              </NavLink>
              <div className="header__inner-buttons">
                <button
                  className="header__inner-button"
                  id="search-icon"
                  onClick={searchBoxHandler}
                >
                  <SearchIcon />
                </button>
                <button
                  className="header__inner-button"
                  id="cart-icon"
                  onClick={cartboxHandler}
                >
                  <CartIcon />
                </button>
                <NavLink to="/account" className="header__inner-button">
                  <Account />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`nav ${isSticky ? "sticky" : null}`}
        id="nav"
        ref={refNav}
      >
        <div className="auto__container">
          <div className="nav__inner">
            <NavLink to="/newarrivals" className="nav__inner-button link">
              New
            </NavLink>
            {drops.map((drop) => {
              return (
                <div className="nav__inner-container" key={drop.id}>
                  <div
                    className={`nav__inner-button ${
                      activeNav && selectedNav === drop.id ? "active" : null
                    }`}
                    onClick={(event) => navClickHandler(drop.id, event)}
                  >
                    {drop.title}
                  </div>
                  <div
                    className={`nav__inner-content ${
                      activeNav && selectedNav === drop.id ? "active" : null
                    }`}
                  >
                    {drop.innerContent.map((link) => {
                      return <NavLink key={link.id}>{link.text}</NavLink>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      <Cart cartClicked={cartClicked} cartboxHandler={cartboxHandler} />
    </>
  );
}

export default Header;
