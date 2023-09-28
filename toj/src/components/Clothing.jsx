import React from "react";



  
export default function MyClothing(){
const Clothing = [
    { id: 1, name: 'Trøje', price: '150', },
    { id: 2, name: 'Bukser', price: '200'},
    { id: 3, name: 'Hat', price: 250,}, 
    {id: 4, name: 'Ring', price: 250,}
  ];
const MyClothing = Clothing.map(Clothing => (
<div className="ClothObjt" key={Clothing.id}>
    
<p>{Clothing.name}</p>
<p>{Clothing.img}</p>
<p>{Clothing.price}</p>
</div>
  ));

return(
    <div>
{MyClothing}
</div>
)
}
