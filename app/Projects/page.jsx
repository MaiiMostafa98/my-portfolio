import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import myImage from '../images/bakery.jpg'


export default function page() {
  return <>
  

   <div className=' mb-4  '>

            <div className='aboutme'>
                <h1 className='h2'>My Projects</h1>
            </div>
            
            <div className='row  pb-3 justify-content-around'>

            <div className=' col-sm-12 col-md-12 projects   '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>HTML , CSS & Bootstrap Projects</h2>
                  <p>Simple and responsive designs built using  HTML , CSS and Bootstrap.</p>
               <ul className=" list-group-flush mb-3 ">
                <li className="list-group-item pe-5">-Daniel</li>
                 <li className="list-group-item pe-5">-Fokir</li>
                 <li className="list-group-item pe-5">-Mealify</li>
                 <li className="list-group-item pe-5">-Devfolio</li>
                 <li className="list-group-item pe-5">-Bakery</li>

               </ul>
                  <a href="../Projects/HtmlandCssAndBootstrap" > <button className=' me-3'>View projects</button></a>
              </div>
            </div>

            </div>


             <div className='row  pb-3 justify-content-around'>

             <div className=' col-sm-12 col-md-12 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>JavaScript Projects</h2>
                  <p>Clean and responsive front-end projects developed using JavaScript.  </p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item pe-5">-Quote of the Day </li>
                 <li className="list-group-item pe-5">-Book Marker</li>
                 <li className="list-group-item pe-5">-Products Dashboard</li>
                 <li className="list-group-item pe-5">-Chef's Menu</li>
               </ul>
                  <a href="../Projects/JavaScript" > <button className='me-3'>View projects</button></a>
              </div>
            </div>

           <div className='row  pb-3 justify-content-around'></div>
            <div className=' col-sm-12 col-md-12 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>React and Next.js Projects</h2>
                  <p>Clean and responsive front-end projects developed using Next.js.  </p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item pe-5">-My Portfolio</li>
               </ul>
                  <a href="../Projects/NextAndReact" > <button className='me-4'>View projects</button></a>
              </div>
            </div>
            </div>

            </div>

        

            
        
  </>
}
