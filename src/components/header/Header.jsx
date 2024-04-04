import React from "react";
import MenuLogo from "../../assets/images/qoves-menu.png";
import FacialLogo from "../../assets/images/facial-logo.png";
import FacialArrowLogo from "../../assets/images/facial-arrow-logo.png";
import CartLogo from "../../assets/images/qoves-cart.png";
import QovesLogo from "../../assets/images/qoves-logo.png";

const Header = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center bg-white w-100"
        style={{ height: "52px", borderBottom: "1px solid #ECECEC" }}
      >
        <div className="d-flex align-items-center">
          <div className="d-none d-md-flex">
            <img src={MenuLogo} alt="menu-logo" />
          </div>
          <div>
            <img src={QovesLogo} alt="qoves-logo" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-none d-md-flex">
            <img src={FacialLogo} alt="facial-logo" />
          </div>
          <div className="px-4">
            <img src={CartLogo} alt="cart-logo" />
          </div>
          <div className="pe-4 border-1 border-end fw-bold fs-4">0</div>
          <div className="d-flex d-md-none">
            <img src={MenuLogo} alt="menu-logo" />
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-between align-items-center bg-white"
        style={{ borderBottom: "1px solid #ECECEC" }}
      >
        <div className="d-flex d-md-none align-items-center">
          <div>
            <img
              style={{
                minWidth: "320px",
                maxWidth: "320px",
                width: "100%",
              }}
              src={FacialArrowLogo}
              alt="menu-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
