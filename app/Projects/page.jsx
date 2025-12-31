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

             <div className=' col-sm-12 col-md-5 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>HTML and CSS Projects</h2>
                  <p>Simple and responsive designs built using pure HTML & CSS.</p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Bakery Website</li>
                 <li className="list-group-item">-Fokir Website</li>
                 <li className="list-group-item">-Mealify Website</li>
               </ul>
                  <a href="../Projects/HtmlandCss" > <button >View projects</button></a>
              </div>
            </div>


            <div className=' col-sm-12 col-md-5 projects   '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>HTML , CSS and Bootstrap Projects</h2>
                  <p>Simple and responsive designs built using  HTML , CSS and Bootstrap.</p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Devfolio Website</li>
                 <li className="list-group-item">-Daniel Website</li> 

               </ul>
                  <a href="../Projects/HtmlandCssAndBootstrap" > <button className='mt-4'>View projects</button></a>
              </div>
            </div>

            </div>


             <div className='row  pb-3 justify-content-around'>

             <div className=' col-sm-12 col-md-5 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>JavaScript Projects</h2>
                  <p>Clean and responsive front-end projects developed using JavaScript.  </p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Quote of the Day Website</li>
                 <li className="list-group-item">-Book Marker</li>
                 <li className="list-group-item">-Products Dashboard</li>
               </ul>
                  <a href="../Projects/JavaScript" > <button >View projects</button></a>
              </div>
            </div>


            <div className=' col-sm-12 col-md-5 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'>React and Next.js Projects</h2>
                  <p>Clean and responsive front-end projects developed using JavaScript.  </p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-</li>
               </ul>
                  <a href="../Projects/NextAndReact" > <button >View projects</button></a>
              </div>
            </div>

            </div>

            
            </div>

            
        
  </>
}
