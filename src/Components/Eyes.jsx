import React, { useEffect } from 'react'
import { useState } from 'react';

function Eyes() {

    const [rotate,setRotate] = useState(0);

   useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        // console.log(mouseX);
        let mouseY=e.clientY;
        // console.log(mouseY);

        let deltaX = mouseX - window.innerWidth/2;
        // console.log(deltaX);
        let deltaY = mouseY - window.innerHeight/2;
        // console.log(deltaY);

        let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
        // console.log(angle);
        setRotate(angle-180);
        // console.log(setRotate);
    })
   })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className='relative w-full h-screen'>
        <img className="bg-gray-200 max-w-full w-full h-full object-cover transform scale-120 entered loaded" data-component="lazyload" src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" width="1440" height="921" data-src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg 2x" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-10 ">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate})`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                     <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
            </div>
            </div>
            </div>
            <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">  
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate})`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                     <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
            </div>
            </div>
         </div>
     
 </div>
    </div>
    </div>
  )
}

export default Eyes
