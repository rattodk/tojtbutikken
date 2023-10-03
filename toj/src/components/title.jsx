// src/Title.js

import React from "react";
import SideTitle from "./SideTitle";
import MyClothing from "./Clothing.jsx";
import MyBox from "./Clothing.jsx";

function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideGrid">
        <div className="SideMargin">
          <div className="fixed">
            <SideTitle />
          </div>
        </div>
        <MyBox />
      </div>
    </div>
  );
}

export default SideNav;
