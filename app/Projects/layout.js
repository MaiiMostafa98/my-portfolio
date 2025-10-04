import React from 'react'

export default function layout({children}) {
  return <>
  <div>
    <div className="pageintro-proj " >
    <div className="page-card-proj ">
        <div className='aboutme'>
            <h1 className='h2'>My Projects</h1>
        </div>
    {children}
    </div>
    </div>
  </div>
  </>
}
