import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return <>
  

   <div className='navbar1 pt-3 pb-2'>
   <div className='container'>
     <div className='row '>
      <div className='col-12 col-md-8 text-center text-md-start  mb-md-0 '>
         <button > <a href='/' className=' link-underline  link-underline-opacity-0'><h3 className='navbar-logo'>{'< Maii Mostafa / >'}</h3></a> </button>
      </div>
      <div className='col-sm-12  col-md-4  '>
           <ul className=' d-flex justify-content-around pt-2  '>
            <li>
                <Link href="/">Home</Link>
            </li> 
             <li>
                <Link href="/About">About Me</Link>
            </li>
            <li>
                <Link href="/Projects">My Projects</Link>
            </li>
           
        </ul>
      </div>
    </div>
   </div>
   </div>


 

  </>
}
