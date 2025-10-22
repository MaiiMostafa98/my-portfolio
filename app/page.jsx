import Link from 'next/link'
import Image from 'next/image'
// import myImage from './maii33.jpeg'
import myImage from '../app/images/ai-maii.jpeg'
import React from 'react'

export default function page() {
  return <>
  
   <div className='home-intro'>
    <div className="home-card ">
        <div className='row  align-items-center'>
         {/* <div className='col-12 col-md-4 mb-4 '>
               <div className="home-img ">
                  <Image src={myImage} alt='myPic' />
               </div>
          </div> */}
          <div className='col-12 col-md-8 text-center text-md-start'>
             <div>
                <h4>Hello, I'm <strong className='h3'>  Maii Mostafa</strong> </h4>
    
                <h1>UI Developer</h1>
                <p className="p h5">"I create clean, responsive, and modern user interfaces with a strong focus on usability and user experience. I bring ideas to life through thoughtful, detail-oriented design and a passion for turning complex problems into intuitive digital solutions. </p>
                {/* <button ><strong><Link href="/About">More About Me</Link></strong></button> */}
                <Link href="/Projects"><button ><strong>View My Projects</strong></button></Link>
                <Link href="/About"><button className='bt-gray' ><strong>More About Me</strong></button></Link>
             </div>
          </div>


           <div className='col-12 col-md-4 mb-4 '>
               <div className="home-img ">
                  <Image src={myImage} alt='myPic' />
               </div>
          </div>

        </div>
    </div>
   </div>

  </>
}
