import Link from 'next/link';
import React from 'react';




export default function page() {
  return <>
  <div className="pageintro" >
    <div className="page-card">
        <div className='aboutme'>
            <h1 className='h2'>About Me</h1>
        </div>
  
  <div className='container pt-3 pb-3 row'>


    <div className='leftSide col-md-4  '>
      <table>
      <tbody>
         <tr>
          <td className='pb-4'>Address :</td>
          <td className='ps-3 pb-4'>New Cairo , Egypt</td>
        </tr>
        <tr>
          <td className='pb-4'>Phone :</td>
          <td className='ps-3 pb-4'>01145446083</td>
        </tr>
        <tr>
          <td className='pb-4'>Brirth Date :</td>
          <td className='ps-3 pb-4 '>28-April-1998</td>
        </tr>
        <tr>
          <td className=''>E-mail :</td>
          <td className='ps-3 '>MaiiMustafa_98@outlook.com</td>
        </tr>

      </tbody>
    </table>

      <div className='me-5'>
         <button><strong><Link href="/Projects">View My Projects</Link></strong></button>
         <button><strong><Link href="https://drive.google.com/file/d/1WkpGMW-acvAf9vyyH61NLvbV7O9XZfkK/view?usp=sharing" target="_blank">Download CV</Link></strong></button>
     </div>
       
       {/* <button ><a href="https://www.linkedin.com/in/maii-mostafa-b11a47188/" target="_blank">Linked-In</a></button>     */}

    </div>

    <div className='rightSide ps-5 col-md-8'>
        <div className='pt-4 pb-4'>
        <h4>My Skills: </h4>
        <div>
          <p className='pt-3'>HTML 95%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width" ></div>
           </div>
           <p className='pt-3'>CSS 85%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85" ></div>
           </div>
           <p className='pt-3'>Bootstrap 85%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" width-85" ></div>
           </div>
           {/* <p className='pt-3'>javaScript 50%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander" ></div>
           </div> */}
           {/* <p className='pt-3'>React 50%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-50 bg-lavander" ></div>
           </div> */}
           <p className='pt-3'>Next.js 75%</p>
           <div className="progress me-5" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className=" w-75 bg-lavander" ></div>
           </div>

        </div>
       

      </div>

    </div>


  </div>  

 

   </div> 
   </div>
  </>
}