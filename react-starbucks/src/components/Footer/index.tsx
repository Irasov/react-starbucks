import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="root">
      <div className="cntainer">
        <div className="body">
          <a href="#" className="logo">StarBucks</a>
          <div className="nav">
            <nav className="menu">
              <ul className="group">
                <li className="name">
                  Main
                  <ul className="items">
                    <li className="item">
                      <a href="#" className="link">
                        Buy
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" className="link">
                        More
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="group">
                <li className="name">
                  We Make
                  <ul className="items">
                    <li className="item">
                      <a href="#" className="link">
                        Buy
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="group">
                <li className="name">
                  Products
                  <ul className="items">
                    <li className="item">
                      <a href="#" className="link">
                        Cappuccino
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" className="link">
                        Fast
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" className="link">
                        Fast
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="group">
                <li className="name">
                  Events
                  <ul className="items">
                    <li className="item">
                      <a href="#" className="link">
                        Drinks
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" className="link">
                        Eat
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="group">
                <li className="name">
                  Contacts
                  <ul className="items">
                    <li className="item">
                      <a href="#" className="link">
                        Instagram
                      </a>
                    </li>
                    <li className="item">
                      <a href="#" className="link">
                        Number
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <button className="up"></button>
          </div>
          <div className="extra">
            <a href="tel:+7-999-999-99-99" className="tel">
              +7-999-999-99-99
            </a>
            <a href="#" className="intagram">
              <svg width="167" height="122" viewBox="0 0 167 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_44_130)">
                  <ellipse cx="44.3946" cy="36.5443" rx="44.3946" ry="36.5443" transform="matrix(-1 0 0 1 127.831 39.042)" fill="url(#paint0_linear_44_130)" fillOpacity="0.15" />
                </g>
                <defs>
                  <filter id="filter0_f_44_130" x="-2.67029e-05" y="-2.67029e-05" width="166.873" height="151.173" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="19.521" result="effect1_foregroundBlur_44_130" />
                  </filter>
                  <linearGradient id="paint0_linear_44_130" x1="88.7892" y1="47.8051" x2="21.3525" y2="51.8099" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#237249" stopOpacity="0.55" />
                    <stop offset="0.518493" stopColor="#35C66B" stopOpacity="0.73" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;