import React, { useState } from "react";
import Kurvknap from "./kobknap.jsx";
import troje from "./SideTitle.jsx";
import bukser from "./SideTitle.jsx";
import Sko from "./SideTitle.jsx";
import Alle from "./SideTitle.jsx";

const Clothing = [
  {
    id: 1,
    name: "Trøje",
    price: "150",
    image: "https://m.media-amazon.com/images/I/71FlagLuukL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Bukser",
    price: "200",
    image:
      "https://www.tradeinn.com/f/13761/137619787/cerda-group-cotton-brushed-fortnite-long-pants.jpg",
  },
  {
    id: 3,
    name: "Hat",
    price: 250,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tophat.jpg",
  },
  {
    id: 4,
    name: "Sko",
    price: 250,
    image: "https://api.time.com/wp-content/uploads/2012/03/a.jpg",
  },
  {
    id: 5,
    name: "Trøje",
    price: "150",
    image:
      "https://kims.dk/wp-content/uploads/2022/09/T-shirt-Sour-Cream-Onion-Front.png.webp",
  },
  {
    id: 6,
    name: "Bukser",
    price: "200",
    image:
      "https://belovedeverything.com/cdn/shop/products/82-BAKEDBEANS-YOGAPANTS_800x.jpg?v=1635521693",
  },
  {
    id: 7,
    name: "Hat",
    price: 250,
    image: "https://img.fruugo.com/product/8/38/415649388_max.jpg",
  },
  {
    id: 8,
    name: "Sko",
    price: 250,
    image:
      "https://images.halloweencostumes.com/products/85337/1-1/red-clown-shoes.jpg",
  },
  {
    id: 9,
    name: "Trøje",
    price: "150",
    image:
      "https://www.religieux-saintchristophe.be/16612-large_default/polyester-t-shirt-jesus-christ-1.jpg",
  },
  {
    id: 10,
    name: "Bukser",
    price: "200",
    image:
      "https://www.medievalware.com/wp-content/uploads/2021/03/jester-pants-1.png",
  },
  {
    id: 11,
    name: "Hat",
    price: 250,
    image:
      "https://www.trumpstore.com/wp-content/uploads/2021/10/TORG102-Front.jpg",
  },
  {
    id: 12,
    name: "Sko",
    price: 250,
    image:
      "https://www.vibram.com/dw/image/v2/AAWR_PRD/on/demandware.static/-/Sites-vibram-storefront-us/default/dw0c4ea450/0000000000000000000000000000000000_1350x1688_FiveFingers-min.png?sw=1090&sh=1363",
  },
];

export default function MyClothing() {
  const MyClothing = Clothing.map((Clothing) => (
    <div className="ClothObjt" key={`clothing-${Clothing.id}`}>
      <p>{Clothing.name}</p>
      <img className="objectimg" src={Clothing.image} alt="" />
      <p>{Clothing.price}</p>
      <Kurvknap />
    </div>
  ));

  return <div className="ObjectGrid">{MyClothing}</div>;
}
