import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards=[useAnimation(), useAnimation()]
    const handleHover =(index)=>{
        cards[index].start({y: "0"})
    }
    const handleHoverEnd =(index)=>{
        cards[index].start({y: "100%"})
    }
  return (
    <div data-scroll data-scroll-section className='w-full py-20'>
      <div className='w-full px-20 border-t-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        <div className="px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative  w-1/2 h-[75vh]">
            <div className="headings z-[99] text-[#CDEA68] right-0 -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl leading-none tracking-tight absolute overflow-hidden">
                {"FYDE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*.05 }} className='inline-block' key={index}>{item}</motion.span>)}</div>
                <div className="card w-full h-full rounded-xl">
                    <img  className="w-full h-full bg-cover" src="" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}  className="cardcontainer relative rounded-xl w-1/2 h-[75vh] ">
            <div className="headings z-[99] text-[#CDEA68] left-0 text-4xl leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight absolute overflow-hidden">
                {"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*.05 }} className='inline-block'  key={index}>{item}</motion.span>)}
            </div>
            <div className="card w-full h-full rounded-xl">
            <img  className="w-full h-full bg-cover" src="" alt="" />
            </div>
            </motion.div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
