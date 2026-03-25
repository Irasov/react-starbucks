import React from "react";

const Header: React.FC = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="body">
          <a href="#" className="logo">
            StarBucks
          </a>
          <div className="icon">
            <span></span>
          </div>
          <div className="nav">
            <div className="menu">
              <a href="#" className="item">Home</a>
              <a href="#" className="item">Select</a>
              <a href="#" className="item">Shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;