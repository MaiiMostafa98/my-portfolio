import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return <>
  

   <div className='navbar1'>
    <div className='row '>
      <div className='col-md-4 '>
         <h3 className='navbar-logo'>Maii's Portfolio</h3>
      </div>
      <div className='col-md-8  '>
           <ul className=' d-flex justify-content-end pt-2 pe-5 '>
            <li>
                <Link href="/">Home</Link>
            </li> 
             <li>
                <Link href="About">About Me</Link>
            </li>
            <li>
                <Link href="/Projects">My Projects</Link>
            </li>
           
        </ul>
      </div>
    </div>
   </div>


 

  </>
}
