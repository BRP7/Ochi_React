import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 items-center bg-zinc-100'>
      <div className="cardcontainer flex items-center justify-center w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-[46vw] h-full bg-[#004D43]">
            <img className='w-32' src="" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2  left-10 bottom-10'>&copy;</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl  h-full w-1/2 bg-[#05110f]">
        <img className='w-32' src="" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>hey</button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl  h-full w-1/2 bg-[#05110f]">
        <img className='w-32' src="" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2  left-10 bottom-10'>hey</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
