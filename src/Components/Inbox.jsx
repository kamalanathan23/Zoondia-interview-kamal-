import React from 'react'
import {Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Inbox = () => {
  return (
    <div className='inbox-data'>
         
         <div className='search'>
           <CiSearch />
           <input type="search" />
         </div>


        <Link to={"/amazon"} >
        <p className="data">
             Amazon 
        </p>
        </Link>

        <Link to={"/flipkart"} >
        <p className="data">
         Flipkart 
        </p>
        </Link>

        <div className="data">
            Myntra
        </div>
        <div className="data">
            Google
        </div>
        <div className="data">
            Facebook
        </div>
        <div className="data">
            Instagram
        </div>
    </div>
  )
}

export default Inbox
