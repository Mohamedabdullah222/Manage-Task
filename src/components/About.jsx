import React from 'react'
import { SlArrowDown } from "react-icons/sl";


const About = () => {
        const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "Track company-wide progress",
            answer: "See how your day-to-day tasks fit into the wider vision Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again",
        },
        {
            question: "Advanced built-in reports",
            answer: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed..",
        },
        {
            question: "Everything you need in one place",
            answer: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution..",
        },

    ];
  return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-16 px-4 md:px-0 mt-20 bg-white/60">
                <div className="max-w-sm " id='about'>

                <h1 className=' mb-3 font-bold text-2xl'>What`s Deifferent About Manage?</h1>
                <p className='  text-black/60 mt-10'>Manage provides all the all the functionality your team needs , without the complexity . Our software is tailor-made for
                    modern digital product teams
                </p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">Looking for answer?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
                    </p> 
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <SlArrowDown className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`} />

                            </div>
                            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-300px translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>

  )
}

export default About
