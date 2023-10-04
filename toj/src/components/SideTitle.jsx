import React, { useState } from "react";
import MyClothing from "./Clothing";

export default function SideTitle() {
  const [displayText, setDisplayText] = useState("Alt");
  const [selectedCategory, setselectedCategory] = useState("All");

  function troje() {
    setDisplayText("T-Shirts");
    setselectedCategory("Trøje");
  }

  function bukser() {
    setDisplayText("Bukser");
    setselectedCategory("Bukser");
  }

  function Sko() {
    setDisplayText("Sko");
    setselectedCategory("Sko");
  }
  function Alle() {
    setDisplayText("Alt");
    setselectedCategory("Alt");
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
      </div>
    </div>
  );
}
