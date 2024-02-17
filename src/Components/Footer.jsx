import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex  gap-5'>
        <div className="w-1/2">
            <div className="heading ml-5 mt-10">
            <h1 className='text-[6vw] uppercase font-semibold -mb-10'>Eye-</h1>
            <h1 className='text-[6vw] uppercase font-semibold  -mb-10'>Opening</h1>
            </div>
            <svg></svg>
        </div>
        <div className='w-1/2 mr-20 mt-10'>
            <h1 className='text-[6vw] font-semibold uppercase leading-none'>Presentations </h1>
            <div className="dets font-['Neue_Montreal'] flex flex-col">
                <a href="#" className='block text-xl font-light'>Facebook</a><a href="#" block text-xl font-light>Instragram</a><a href="#" block text-xl font-light>Twitter</a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
