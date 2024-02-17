import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='1.2' className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden  ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[13vw] leading-none uppercase pt-1 pb-2 font-semibold pr-20'>We Are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[13vw] leading-none uppercase pt-1 pb-2 font-semibold pr-20'>We Are Ochi</motion.h1>
        {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[13vw] leading-none uppercase pt-1 pb-2 font-semibold'>We Are Ochi</motion.h1> */}
      </div>
    </div>
  )
}

export default Marquee
