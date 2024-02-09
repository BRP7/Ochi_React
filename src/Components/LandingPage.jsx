import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-32 px-20">
        {["We Create","Eye Opening","Presentation"].map((item,index)=>{
            return  <div kry={index} className="masker">
                <div className="w-fit flex">
                    {index === 1 && (<div className='w-[9vw] h-[5.5vw] relative top-[1vw] rounded bg-red-200'></div>)}
                     <h1 className={`uppercase leading-[6.5vw] tracking-tighter font-medium  font-["Neue Montreal"] text-8xl `}>{item}</h1>
                </div>
        </div>
        }
        )}
        {/* <div className="masker">
            <h1 className='uppercase font-["FoundersGrotesk-Semibold leading-[9.9vw] tracking-tighter font-medium "] text-5xl'>Eye Opening</h1>
        </div>
        <div className="masker">
            <h1 className='uppercase font-["FoundersGrotesk-Semibold leading-[9.9vw] tracking-tighter font-medium "] text-5xl'>Presentation</h1>
        </div> */}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first Pitch to IPO"].map((item,index)=>(
            <p key={index} className='text-xs font-light traking-tight leading-none '>{item}</p>
        ))}
      <div className="start flex items-center gap-3">
        <div className="px-5 py-2 border-[1px] border-zinc-400 font-light uppercase rounded-full text-xs ">Start the Project</div>
        <div className="rounded-full border-[1px] border-zinc-400 w-9 h-9 flex items-center justify-center">
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
            </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
