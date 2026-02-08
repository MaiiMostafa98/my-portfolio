'use client';

import Link from 'next/link'
import Image from 'next/image'
// import myImage from '../app/images/3.png'
// import myImage from './images/ai-maii.jpeg'
// import myImage from './images/ChatGPT Image Feb 7, 2026, 10_35_54 AM.png'
import myImage from './images/myImg 1.jpeg'
import React from 'react'

export default function page() {

  return <>
  
   <div className='home-intro ' >
    <div className="home-card ">
        <div className='row '>



         <div className='col-12 col-md-4 mb-4 '>
               <div className="home-img ">
                  <Image src={myImage} alt='myPic'  />
               </div>
          </div>


          <div className='col-12 col-md-8 text-center text-md-start '>
             <div>
                <h4 className='pb-2'>Hello, I'm <strong className='h3 '>  Maii Mostafa</strong> </h4>
    
                <h1>Front-end Web Developer</h1>
                <p className="p h5">"I create clean, responsive, and modern user interfaces with a strong focus on usability and user experience. I bring ideas to life through thoughtful, detail-oriented design and a passion for turning complex problems into intuitive digital solutions. </p>
                <Link href="/About"><button className='bt-gray' ><strong>More About Me</strong></button></Link>
                <Link href="/Projects"><button ><strong>View My Projects</strong></button></Link>
             </div>
          </div>


           {/* <div className='col-12 col-md-4 mb-4 '>
               <div className="home-img  " >
                  <Image src={myImage} alt='myPic' />
               </div>
          </div> */}

        </div>
    </div>
   </div>

  </>
}
