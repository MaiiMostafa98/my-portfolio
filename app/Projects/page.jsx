import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import myImage from '../images/bakery.jpg'


export default function page() {
  return <>
  

   <div className=' mb-4  '>

     
            
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
                  <p>Simple and responsive designs built using pure HTML , CSS and Bootstrap.</p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Devfolio Website</li>
                 <li className="list-group-item">-Daniel Website</li> 

               </ul>
                  <a href="../Projects/HtmlandCssAndBootstrap" > <button className='mt-4'>View projects</button></a>
              </div>
            </div>

            </div>

            
            </div>

            
         {/* <div className=' mb-4  '>
             <div className='row mt-3 justify-content-around'>
             <div className=' col-sm-12 col-md-5 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'> JavaScript Projects</h2>
                  <p>Simple and responsive designs built using pure HTML & CSS.</p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Landing Page</li>
                 <li className="list-group-item">-Portfolio Website</li>
                 <li className="list-group-item">-Restaurant Website</li>
                 <li className="list-group-item">-Login Form</li>
               </ul>
                  <a href="../Projects/HtmlandCss" > <button >View projects</button></a>
              </div>
            </div>

            <div className=' col-sm-12 col-md-5 projects  '>
              <div className='  text-center  '>
                  <h2 className='text-center h4'> React and Nextjs Projects </h2>
                  <p>Simple and responsive designs built using pure HTML & CSS.</p>
               <ul className=" list-group-flush mb-3 ">
                 <li className="list-group-item">-Landing Page</li>
                 <li className="list-group-item">-Portfolio Website</li>
                 <li className="list-group-item">-Restaurant Website</li>
                 <li className="list-group-item">-Login Form</li>
               </ul>
                  <a href="../Projects/HtmlandCss" > <button >View projects</button></a>
              </div>
            </div>
           </div>
         </div> */}
  </>
}
