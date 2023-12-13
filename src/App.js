import React from 'react'

import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import  Sentfile  from './Components/Sentfile.jsx'
import  Fav  from './Components/Fav.jsx'
import  Inbox  from './Components/Inbox.jsx'
import  Mainpage   from './Components/Mainpage.jsx'
import Amazon from './Components/Message/Amazon.jsx'
import Flipkart from './Components/Message/Flipkart.jsx'
export const App = () => {
  const router = createBrowserRouter([
    {
      path:'/inbox',
      element: <Inbox />
    },
    {
      path: '/sentfile',
      element:<Sentfile />

    },
    {
      path: '/fav',
      element: <Fav />
    },
    {
      path:'/',
      element: <Mainpage />
    },
    {
      path:'/amazon',
      element: <Amazon />
    },
    {
      path:'/flipkart',
      element: <Flipkart />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
