import React, { useState, useContext } from "react";
import Kurvknap from "./kobknap.jsx";
import troje from "./SideTitle.jsx";
import bukser from "./SideTitle.jsx";
import Sko from "./SideTitle.jsx";
import Alle from "./SideTitle.jsx";
import ClothingContext from "../clothingcontext.js";

export default function MyClothing() {
  const { clothingitems, clothingFilter } = useContext(ClothingContext);
  const MyClothing = clothingitems
    .filter(
      (clothing) =>
        clothing.name.toLowerCase() === clothingFilter.toLowerCase() ||
        clothingFilter === "Alt"
    )
    .map((Clothing) => (
      <div className="ClothObjt" key={`clothing-${Clothing.id}`}>
        <p>{Clothing.name}</p>
        <img className="objectimg" src={Clothing.image} alt="" />
        <p>{Clothing.price}</p>
        <Kurvknap />
      </div>
    ));

  return <div className="ObjectGrid">{MyClothing}</div>;
}
