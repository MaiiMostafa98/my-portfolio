import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



export default function page() {
  return <>
  
  
    <div className="pageintro" >
    <div className="page-card">
        {/* <div className='aboutme'>
            <h1 className='h2'>About Me</h1>
        </div> */}
  <div className='container'>
  <div className='  row '>


    <div >
        <div className=' pb-2 '>
        <h3 className='text-decoration-underline pt-3 '>My Skills: </h3>
        <div>
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width rounded " >
             <p className='text-light mx-3'>HTML 95%</p>
            </div>
           </div>
           
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85 rounded" >
              <p className='text-light mx-3'>CSS 85%</p>
            </div>
           </div>
           
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85 rounded" >
              <p className='text-light mx-3'>Bootstrap 85%</p>
            </div>
           </div>
           
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-75 bg-lavander rounded" >
              <p className='text-light mx-3'>javaScript 75%</p>
            </div>
           </div>
          
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander rounded" >
             <p className='text-light mx-3'>React.js 50%</p>
            </div>
           </div>
           
           <div className="progresss rounded mt-4 " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander rounded" >
             <p className='text-light mx-3'>Next.js 50%</p>
            </div>
           </div>

          <div className=''>
              <Link href="/Projects"><button className='bt-gray' ><strong>View My Projects</strong></button></Link>
              <a href="/Maii-Mostafa-Front-End-Developer.pdf" download={"Maii-Mostafa-CV.pdf"} className=""><button ><strong>Download CV</strong></button></a>
          </div>

        </div>
      </div>
    </div>

  </div> 

  <div className='pt-3 pb-3'>
     <h3 className='text-decoration-underline pt-3 pb-3 '>Contact me </h3>

      <div className="row g-3">

  {/* Phone */}
  <div className="col-md-3">
    <div className=" py-3 px-3 rounded text-center  shadow">
      <div className='icon m-auto'>
        <FontAwesomeIcon icon={faPhone} size="lg"  />
      </div>
      <p className="mb-0 fw-bold mt-2">01145446083</p>
    </div>
  </div>

  {/* Email */}
  <div className="col-md-3">
    <div className=" py-3 px-3 rounded text-center  shadow">
      <div className='icon m-auto'>
        <FontAwesomeIcon icon={faEnvelope} size="lg"  />
      </div>
      <p className="mb-0 fw-bold mt-2">MaiiMustafa_98@outlook.com</p>
    </div>
  </div>

  {/* LinkedIn */}
  <div className="col-md-3">
    <a href="https://www.linkedin.com/in/maii-mostafa-b11a47188/" target="_blank" className="text-decoration-none text-secondary ">
      <div className="py-3 px-3 rounded text-center  shadow">
        <div className='icon m-auto'>
          <FontAwesomeIcon icon={faLinkedin} size="lg"  />
        </div>
        <p className="mb-0 fw-bold mt-2">LinkedIn</p>
      </div>
    </a>
  </div>

  {/* GitHub */}
  <div className="col-md-3">
    <a href="https://github.com/MaiiMostafa98" target="_blank" className="text-decoration-none text-secondary">
      <div className="py-3 px-3 rounded text-center  shadow">
          <div className='icon m-auto'>
            <FontAwesomeIcon icon={faGithub} size="lg"  />
            </div>
           <p className="mb-0 fw-bold mt-2">GitHub</p>
      </div>
    </a>
  </div>

</div>
     
  </div> 

 

   </div> 
   </div>
  </div>
  </>
}