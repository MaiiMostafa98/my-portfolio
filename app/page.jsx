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
         <div className='col-12 col-md-4 mb-4 '>
               <div className="home-img ">
                  <Image src={myImage} alt='myPic' />
               </div>
          </div>
          <div className='col-12 col-md-8 text-center text-md-start'>
             <div className=" ps-4 ">
                <h4>Hello I'm <strong className='h3'>  Maii Mostafa</strong> </h4>
    
                <h1>UI Developer</h1>
                <p className="p">"I create clean, responsive designs with a focus on modern user interfaces. I bring ideas to life through thoughtful, </p>
                <p>detail-driven design and a strong emphasis on usability."</p>
                {/* <button ><strong><Link href="/About">More About Me</Link></strong></button> */}
                <Link href="/About"><button ><strong>More About Me</strong></button></Link>
             </div>
          </div>
          

        </div>
    </div>
   </div>

  </>
}
