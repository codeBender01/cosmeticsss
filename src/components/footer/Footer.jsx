import React from "react";
import {
  AiFillFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-col">
            <a href="#">TERMS OF USE</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">SHIPPING & RETURNS</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer__inner-col">
            <p>FOLLOW US</p>
            <div className="social">
              <IconContext.Provider
                value={{
                  color: "#ffffff",
                  size: "25px",
                }}
              >
                <span>
                  <AiFillFacebook />
                </span>
                <span>
                  <AiOutlineInstagram />
                </span>
                <span>
                  <AiOutlineYoutube />
                </span>
              </IconContext.Provider>
            </div>
          </div>
          <div className="footer__inner-col">
            © 2022 beautifull Tm. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
