import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Authprovider from './Authentication/Provider/Authprovider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Fixedcomponent from './component/Mainroute/Fixedcomponent.jsx'
import Taskboard from './TaskBoard/Taskboard.jsx'
import Login from './Authentication/Login.jsx'



const router =createBrowserRouter([{

  path:'/',
  element:<Fixedcomponent/>,
  children:[{
    path:'/',
    element:<Login/>

  },
{
  path: '/TaskTracker',
  element: <Taskboard />
}]


 }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Authprovider>
      <div className='bg-gradient-to-r from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc]'>
        <RouterProvider router={router} />
  </div>

</Authprovider>
  </React.StrictMode>,
)
