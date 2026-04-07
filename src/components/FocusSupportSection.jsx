import Image from 'next/image';
import React from 'react';

const FocusSupportSection = () => {

    return (
        <section id="graduates" className="bg-[#0B0F14] text-white py-40 md:py-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center">
                {/* Top Text */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-8 mx-auto">
                        <span className="flex items-center gap-2 text-xs md:text-[15px] text-[#D0D5D9]">
                            <span className='rounded-full h-2 w-2 bg-[#2466F2]' /> Are Distractions Holding You Back?
                        </span>
                    </div>

                    <p className="text-[28px] md:text-[52px] text-[#E0E3E5] leading-relaxed">
                        If you struggle to focus, feel overwhelmed by endl<span className='text-[#dfe2e54d]'>ess tasks, or
                            procrastinate instead of making progress, you're not alone.</span>
                    </p>
                    {/* Avatar Group */}
                    <div className="flex justify-center mt-5 sm:mt-6 -space-x-2 sm:-space-x-3">
                        {["https://res.cloudinary.com/dincextlz/image/upload/v1775415960/image_y4cvuh.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775416165/image_p2dddr.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775416227/image_ben3aw.png"].map((i, index) => (
                            <Image
                                key={index}
                                src={i}
                                alt="user"
                                width={40}
                                height={40}
                                className="w-8 h-8 md:w-10 md:h-10 lg:w-29.5 lg:h-30 rounded-full border-2 border-black object-cover"
                            />
                        ))}
                    </div>
                </div>
                {/* Bottom Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center w-full">
                    {/* Left Image */}
                    <div className="relative w-full h-60 sm:h-75 md:h-105 lg:h-120 rounded-2xl overflow-hidden order-1 md:order-0">
                        <Image
                            src="https://res.cloudinary.com/dincextlz/image/upload/v1775416335/image_pah8sy.png"
                            alt="Focus person"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* Right Card */}
                    <div className="bg-[#11161C] p-5 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden order-2 md:order-0">
                        <h3 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-md pr-10 sm:pr-12">
                            <span className='text-[17px]'>The ability to concentrate deeply is underrated in today's world.</span>
                            <br className="hidden sm:block" />
                            <br className="hidden sm:block" />
                            <span className='text-[24px] md:text-[28px] font-medium block'>And fortunately its a skill you can train & develop.</span>
                        </h3>
                        {/* Side Avatars */}
                        <div className="absolute right-3 top-3 sm:right-4 sm:top-4 flex flex-col space-y-2 sm:space-y-3">
                            {["https://res.cloudinary.com/dincextlz/image/upload/v1775416419/image_fkity2.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775416523/image_ufug6k.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775416622/image_bcgzze.png"].map((i, index) => (
                                <Image
                                    key={index}
                                    src={i}
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 lg:w-29.5 lg:h-30 rounded-lg object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusSupportSection;