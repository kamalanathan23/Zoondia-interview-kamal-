import React from 'react'
import { Link } from 'react-router-dom'
import "./Css/Mainpage.css"
import Menu from '../Components/Menu/Menu.jsx' 
import Inbox from '../Components/Inbox.jsx'
import Amazon from '../Components/Message/Amazon.jsx'
import Flipkart from '../Components/Message/Flipkart.jsx'
const Mainpage = () => {
  return (
    <div className='app-container'>
    <div className='email-men'>
     <Menu />
    </div >
    <div className="email-data">
       <Inbox />
    </div>
    <div className="email-message">
        <div class="message-btn">
           {/* <Link to={"/"}>Fav</Link>
           <Link to={"/"}>Delete</Link> */}
           <button>Fav</button>
           <button>Delete</button>
        </div>
        <Amazon />
        <Flipkart />
     </div>
    </div>
  )
}

export default Mainpage
