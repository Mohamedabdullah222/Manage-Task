import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
      <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                                    {/* Logo */}
                                    <a href="/" className="flex items-center gap-2 ">
                                    <CgMenuGridR className='text-[#F3613C] text-3xl' /> <span className='text-lg font-bold text-black'>Manage</span>
                    
                                    </a>
                    <p className='text-sm ml-1'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-4 text-gray-500'>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/mohamed_abd_3" target='_blank'><FaInstagramSquare className='text-2xl'/></a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/MohamedAbdullahh22" target='_blank'><FaFacebookSquare className='text-2xl'/></a>
                        {/* GitHub */}
                        <a href="https://github.com/Mohamedabdullah222" target='_blank'><FaSquareGithub className='text-2xl' /></a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/mohamed-abdullah-m" target='_blank'><IoLogoLinkedin className='text-3xl'/></a>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#customer">Customer</a></li>
                        <li><a href="#getstart">GetStart</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center text-white h-9 w-9 aspect-square rounded-r bg-[#F3613C] hover:bg-[#F3613C]/80'>
                            Go

                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Mohamed Abdullah. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
