import React from 'react'
import { IoMdStar } from 'react-icons/io'

const Customers = () => {

  return (<div id="customer">
                                  <h1 className=' text-3xl font-bold items-center text-center my-20 '>what they've said</h1>

        <div className=" container mx-auto flex flex-wrap items-center justify-center gap-6 pt-14 ">

            
            <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">

                <div className="flex flex-col items-center px-5 py-4 relative">
                    <img className="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
                    <div className="pt-8 text-center">
                        <h1 className="text-lg font-medium text-gray-800">Ali Bravo</h1>
                    </div>
                </div>
                <p className="text-gray-500 px-6 text-center">We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.</p>
                <div className="flex justify-center pt-4">
                    <div className="flex gap-0.5  ">
  {Array(5).fill().map((_, i) => (
    <IoMdStar
      key={i}
      className="text-amber-600 w-6 h-6"
    />
  ))}
                    </div>
                </div>
            </div>
        
            <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
                <div className="flex flex-col items-center px-5 py-4 relative">
                    <img className="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2" />
                    <div className="pt-8 text-center">
                        <h1 className="text-lg font-medium text-gray-800">Richard Watts</h1>
                    </div>
                </div>
                <p className="text-gray-500 px-6 text-center">Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!.</p>
                <div className="flex justify-center pt-4">
                    <div className="flex gap-0.5">
  {Array(5).fill().map((_, i) => (
    <IoMdStar
      key={i}
      className="text-amber-600 w-6 h-6"
    />
  ))}
                    </div>
                </div>
            </div>
        
            <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
                <div className="flex flex-col items-center px-5 py-4 relative">
                    <img className="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="userImage3" />
                    <div className="pt-8 text-center">
                        <h1 className="text-lg font-medium text-gray-800">Anisha Ali</h1>
                    </div>
                </div>
                <p className="text-gray-500 px-6 text-center">Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.Manage has supercharged.</p>
                <div className="flex justify-center pt-4">
                    <div className="flex gap-0.5">
  {Array(5).fill().map((_, i) => (
    <IoMdStar
      key={i}
      className="text-amber-600 w-6 h-6"
    />
  ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Customers
