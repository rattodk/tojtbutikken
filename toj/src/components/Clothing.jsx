import React from "react";
import Kurvknap from './kobknap.jsx';




  
export default function MyClothing(){
const Clothing = [
    { id: 1, name: 'Trøje', price: '150', },
    { id: 2, name: 'Bukser', price: '200'},
    { id: 3, name: 'Hat', price: 250,}, 
    {id: 4, name: 'Ring', price: 250,},
    { id: 5, name: 'Trøje', price: '150', },
    { id: 6, name: 'Bukser', price: '200'},
    { id: 7, name: 'Hat', price: 250,}, 
    {id: 8, name: 'Ring', price: 250,},
    { id: 9, name: 'Trøje', price: '150', },
    { id: 10, name: 'Bukser', price: '200'},
    { id: 11, name: 'Hat', price: 250,}, 
    {id: 12, name: 'Ring', price: 250,}
  ];
const MyClothing = Clothing.map(Clothing => (
<div className="ClothObjt" key={Clothing.id}>
    
<p>{Clothing.name}</p>
<p>{Clothing.img}</p>
<p>{Clothing.price}</p>
<Kurvknap />
</div>
  ));



  
return(
    <div className="ObjectGrid">
{MyClothing}
</div>
)
}