import React, { useState } from "react";

function SideTitle() {
  const [displayText, setDisplayText] = useState("Alt");

  function troje() {
    setDisplayText("T-shirts");
  }

  function bukser() {
    setDisplayText("Bukser");
  }

  function Sko() {
    setDisplayText("Sko");
  }
  function Alle() {
    setDisplayText("Alt");
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
          Trøjer
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

export default SideTitle;
