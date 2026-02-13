import Link from 'next/link';
import React from 'react';




export default function page() {
  return <>
  <div className="pageintro" >
    <div className="page-card">
        <div className='aboutme'>
            <h1 className='h2'>About Me</h1>
        </div>
  
  <div className='  row '>


    <div className='leftSide col-md-4  '>
      <table>
      <tbody>
         <tr>
          <td className='pb-5'>Address:</td>
          <td className='ps-3 pb-5'>New Cairo , Egypt</td>
        </tr>
        <tr>
          <td className='pb-5'>Phone :</td>
          <td className='ps-3 pb-5'>01145446083</td>
        </tr>
        <tr>
          <td className=''>E-mail :</td>
          <td className='ps-3 '>MaiiMustafa_98@outlook.com</td>
        </tr>

      </tbody>
    </table>

      <div className='me-5 my-5'>
         <Link href="/Projects"><button ><strong>View My Projects</strong></button></Link>
         <a href="/Maii-Mostafa-Front-End-Developer.pdf" download={"Maii-Mostafa-CV.pdf"} className=""><button ><strong>Download CV</strong></button></a>

         {/* <Link href="https://drive.google.com/file/d/1VsiOTWLPwPqPXL5xV80ZHZHSTWC7PYoy/view?usp=sharing" target="_blank"><button ><strong>Download CV</strong></button></Link> */}
     </div>
       
       {/* <button ><a href="https://www.linkedin.com/in/maii-mostafa-b11a47188/" target="_blank">Linked-In</a></button>     */}

    </div>


    <div className='rightSide  col-md-8'>
        <div className='pt-4 pb-4'>
        <h4>My Skills: </h4>
        <div>
          <p className='pt-3'>HTML 95%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width" ></div>
           </div>
           <p className='pt-3'>CSS 85%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85" ></div>
           </div>
           <p className='pt-3'>Bootstrap 85%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85" ></div>
           </div>
           <p className='pt-3'>javaScript 75%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-75 bg-lavander" ></div>
           </div>
           <p className='pt-3'>React.js 50%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander" ></div>
           </div>
           <p className='pt-3'>Next.js 50%</p>
           <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander" ></div>
           </div>

        </div>
      </div>
    </div>

  </div>  

 

   </div> 
   </div>
  </>
}