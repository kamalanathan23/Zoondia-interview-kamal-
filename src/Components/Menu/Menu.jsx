import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='menu-container'>
       <div className="menu-item">
         <ul>
            <li> <Link to={"/inbox"} >Inbox</Link></li> 
            <li><Link to={"/sentfile"}>Sent File</Link></li>
            <li><Link to={"/fav"}>Fav</Link></li>
         </ul>
       </div>
    </div>
  )
}

export default Menu
