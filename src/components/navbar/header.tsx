import React, { Component, useState } from "react";
import { MenuItems } from "../../util/menuItems";

interface navBarProps {
  handleMenuClick?: () => void;
}

export function Navbar({ handleMenuClick }: navBarProps) {
  const [menuClicked, setMenuClicked] = useState(false);
  const here = {
    backgroundColor: "#884242",
    color: "white",
    //boxShadow: "0 10px 16px 0 rgba(0,0,0,0.2)",
  };

  const handleClick = () => {
    setMenuClicked(!menuClicked);
    if (!!handleMenuClick) {
      handleMenuClick();
    }
  };

  {
    return (
      <>
        <div className="App">
          <nav className="Navbar">
            <div>
              <h2 id="logoImgDiv"></h2>
              <span id="hamburgerMenu" onClick={handleClick}>
                <span className="material-symbols-outlined" id="menuIcon">
                  {menuClicked ? "close" : "menu"}
                </span>
              </span>
            </div>

            <ul className={menuClicked ? "navItems.active" : "navItems"}>
              {MenuItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={window.location.pathname == item.url ? here : {}}
                  >
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
