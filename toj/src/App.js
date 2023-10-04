import logo from "./logo.svg";
import "./App.css";
import ComponentHeader from "./components/ComponentHeader.jsx";
import Title from "./components/SideNav.jsx";
import MyTitle from "./components/SideNav.jsx";
import SideNav from "./components/SideNav.jsx";
import MyClothing from "./components/MyClothing";
import Footeroo from "./components/Footeroo.jsx";
import kobknap from "./components/kobknap";
import React, { useContext } from "react";

export default function MyApp() {
  return (
    <div>
      <div>
        <ComponentHeader />
      </div>
      <div></div>
      <SideNav />
      <kobknap />
      <Footeroo />
    </div>
  );
}
