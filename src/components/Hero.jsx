import React from 'react'

const Hero = () => {
  return (
      <div className=" container mx-auto  grid grid-cols-1 md:grid-cols-2 px-5 ">
        {/* Section Right */}
        <div className="flex flex-col gap-4 max-w-lg">
<h1 className='text-3xl font-bold '>Bring everyone together to build better products.</h1>
<p className='text-black/60 mt-6'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
<button className='mt-6 py-2.5 w-40 rounded-full transition-all duration-500  text-white bg-[#F3613C] hover:bg-[#F3613C]/80 cursor-pointer'>Get Start</button>
        </div>
        {/* Section Left */}
        <div className="flex justify-center mt-6 lg:mt-0">

<img src="./Hero.PNG" alt="" width={500} height={500} className=' ' />
        </div>
        </div>
  )
}

export default Hero
