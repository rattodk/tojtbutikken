import React, { useContext, useState } from "react";

export default function SideTitle() {
  const [displayText, setDisplayText] = useState("Alt");
  const { clothingItems, setClothingItems } = clothingItems;

  function troje() {
    setDisplayText("T-Shirts");
    setClothingItems(clothingItems.filter((x) => x.name === "Trøje"));
  }

  function bukser() {
    setDisplayText("Bukser");
    setClothingItems(clothingItems.filter((x) => x.name === "Bukser"));
  }

  function Sko() {
    setDisplayText("Sko");
    setClothingItems(clothingItems.filter((x) => x.name === "Sko"));
  }
  function Hat() {
    setDisplayText("Hat");
    setClothingItems(clothingItems.filter((x) => x.name === "Hat"));
  }
  function Alle() {
    setDisplayText("Alt");
    setClothingItems(clothingItems.filter((x) => x.name === "Alt"));
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
