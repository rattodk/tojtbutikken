import logo from "./logo.svg";
import "./App.css";
import ComponentHeader from "./components/ComponentHeader.jsx";
import Title from "./components/SideNav.jsx";
import MyTitle from "./components/SideNav.jsx";
import SideNav from "./components/SideNav.jsx";
import MyClothing from "./components/MyClothing";
import Footeroo from "./components/Footeroo.jsx";
import kobknap from "./components/kobknap";
import React, { useContext, createContext, useState } from "react";
import Clothingdata from "./components/Clothingdata.json";
import ClothingContext from "./clothingcontext.js";

export default function MyApp() {
  const [clothingFilter, setClothingFilter] = useState("Alt");
  return (
    <ClothingContext.Provider
      value={{ clothingitems: Clothingdata, clothingFilter, setClothingFilter }}
    >
      <div>
        <div>
          <ComponentHeader />
        </div>
        <div></div>
        <SideNav />
        <kobknap />
        <Footeroo />
      </div>
    </ClothingContext.Provider>
  );
}
