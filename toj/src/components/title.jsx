// src/Title.js

import React from 'react'
import SideTitle from './SideTitle';
import MyClothing from './Clothing.jsx';






function SideNav() {
  return (
    <div className='SideNav'> 
    <div className='SideGrid'>
        <div className="SideMargin">
<div className='SideNavLink'>
<a ClassNamehref="SideNavLink">
<btn className="SideNavBtn">
    yeet1
</btn>
</a>
<a ClassNamehref="SideNavLink">
<btn className="SideNavBtn">
    yeet2
</btn>
</a>
<a ClassNamehref="SideNavLink">
<btn className="SideNavBtn">
    yeet3
</btn>
</a>
<a ClassNamehref="SideNavLink">
<btn className="SideNavBtn">
    yeet4
</btn>
</a>

</div>

</div>
<div className='ObjectGrid'>
    <MyClothing />
</div>



    
</div>

    </div>

    
  )
}

export default SideNav