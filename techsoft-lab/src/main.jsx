import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './home component/Home'
import EnqForm from './enqForm/EnqForm'
import ContactUs from './header pages/ContactUs'
import AboutUs from './header pages/AboutUs'
// import Webdev from './home component/pages/Webdev'



let router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/contact-us',
          element:<ContactUs/>
        },
        {
          path:'/about-us',
          element:<AboutUs/>
        },
      ]
    },
    
  ]
)



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)


// 1.Web Development
// 2. Software Deveploment
// 3. Data analysis
// 4. Android and Ios Application
// 5. System Hardware Services
// 6. Operation and Project management Consulting


            // <div className='p-3 bg-[#F3F3F7] rounded-[50%]'>
            //   <div className='flex justify-between '>
            //     <img src={idea} alt="Planning" className='w-12'/>
            //     <h1 className='text-5xl text-[#F3F3F7] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black]'>1</h1>
            //   </div>
            //   <div>
            //     <h1 className='font-bold'>Planning & Requirements Gathering</h1>
            //     <p className='text-justify'>Understanding goals and outlining project necessities.</p>
            //   </div>
            // </div>
            
            
            
          