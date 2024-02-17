import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-t-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        <div className="px-20 ">
        <div className="cards w-full flex gap-10 mt-10">
            <div className="cardcontainer relative  w-1/2 h-[75vh]">
            <div className="headings z-[99] text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl leading-none tracking-tight absolute">
                {"FYDE".split('').map((item,index)=><span key={index}>{item}</span>)}</div>
                <div className="card w-full h-full rounded-xl">
                    <img  className="w-full h-full bg-cover" src="" alt="" />
                </div>
            </div>
            <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh] ">
            <div className="headings z-[99] text-[#CDEA68] left-0 text-4xl leading-none -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tight absolute">
                {"VISE".split('').map((item,index)=><span key={index}>{item}</span>)}
            </div>
            <div className="card w-full h-full rounded-xl">
            <img  className="w-full h-full bg-cover" src="" alt="" />
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
