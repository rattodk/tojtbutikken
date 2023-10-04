// src/Title.js

import React, { useContext, useState } from "react";
import SideTitle from "./SideTitle";
import MyClothing from "./MyClothing.jsx";
import clothing from "./Clothingdata.json";

function SideNav() {
  const [clothingItems, setClothingItems] = useState(clothing);

  return (
    <div className="SideNav">
      <div className="SideGrid">
        <div className="SideMargin">
          <div className="fixed">
            <SideTitle />
          </div>
        </div>
        <MyClothing clothingItems={clothingItems} />
      </div>
    </div>
  );
}
export default SideNav;
