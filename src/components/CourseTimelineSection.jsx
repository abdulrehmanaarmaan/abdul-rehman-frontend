import React from 'react';
import { FaBolt, FaBrain, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

const CourseTimelineSection = () => {

    const steps = [
        {
            icon: <FaBolt />,
            text: "Develop laser-sharp focus & eliminate distractions.",
        },
        {
            icon: <FaBrain />,
            text: "Master deep work techniques for smarter productivity.",
        },
        {
            icon: <FaCheckCircle />,
            text: "Overcome procrastination & get more done.",
        },
        {
            icon: <FaLayerGroup />,
            text: "Build lasting habits for long-term success.",
        },
    ];

    return (
        <section className="bg-[#070B10] text-white py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto flex flex-col items-center">

                {/* Badge */}
                <span className="flex items-center gap-2 text-xs md:text-[15px] text-[#D0D5D9] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-5 md:mb-6">
                    <span className='rounded-full h-2 w-2 bg-[#2466F2]' /> <span>The Deep Work Blueprint</span>
                </span>


                {/* Heading */}
                <h2 className="text-center text-xl md:text-[40px] font-medium text-gray-200 mb-40 leading-snug max-w-lg md:max-w-full">
                    A self-paced, results-driven
                    <br className="hidden sm:block" />
                    course designed to help you
                </h2>

                {/* Timeline */}
                <div className="relative w-fit mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-3.5 sm:left-4 top-0 h-full w-0.5 bg-blue-500/30"></div>

                    {/* Steps */}
                    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start gap-4 sm:gap-6">

                                {/* Dot */}
                                <div className="absolute left-2.5 sm:left-2.5 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>

                                <div className='ml-6 md:ml-15'>
                                    {/* Icon */}
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#11161C] flex items-center justify-center text-gray-300 text-xs sm:text-sm shadow-md">
                                        {step.icon}
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-300 text-xs sm:text-sm md:text-[24px] leading-relaxed max-w-50 sm:max-w-xs md:max-w-sm">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CourseTimelineSection;