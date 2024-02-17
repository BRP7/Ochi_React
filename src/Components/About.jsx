import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[4.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell prod­ucts, explain com­plex ideas, and hire great peo­ple.</h1>
         <div className="w-full flex gap-5 border-t-[1px] mt-20  border-[#a1b562]">
          <div className="w-1/2 mt-10">
            <h1 className="text-7xl">Our approach:</h1>
             <button className='flex uppercase gap-10 text-white items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full'>Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
             </button>
          </div>
          <div className=" w-1/2 h-[70vh] rounded-3xl  mt-10"><img class="bg-gray-200  w-full max-w-full rounded entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" /></div>
         </div>
    </div>
  )
}

export default About
