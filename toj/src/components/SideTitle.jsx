import React, { useContext, useState } from "react";
import ClothingContext from "../clothingcontext";

export default function SideTitle() {
  const [displayText, setDisplayText] = useState("Alt");
  const clothingItems = useContext(ClothingContext);
  const setClothingFilter = clothingItems.setClothingFilter;

  function troje() {
    setDisplayText("T-Shirts");
    setClothingFilter("Trøje");
  }

  function bukser() {
    setDisplayText("Bukser");
    setClothingFilter("Bukser");
  }

  function Sko() {
    setDisplayText("Sko");
    setClothingFilter("Sko");
  }
  function Hat() {
    setDisplayText("Hat");
    setClothingFilter("Hat");
  }
  function Alle() {
    setDisplayText("Alt");
    setClothingFilter("Alt");
  }
  return (
    <div>
      <div className="title1">
        <h3>{displayText}</h3>
      </div>
      <div className="SideNavLink">
        <button className="SideNavBtn" onClick={Alle}>
          Alt
        </button>
        <button className="SideNavBtn" onClick={troje}>
          T-Shirt
        </button>
        <button className="SideNavBtn" onClick={bukser}>
          Bukser
        </button>

        <button className="SideNavBtn" onClick={Sko}>
          Sko
        </button>
        <button className="SideNavBtn" onClick={Hat}>
          Hat
        </button>
      </div>
    </div>
  );
}
