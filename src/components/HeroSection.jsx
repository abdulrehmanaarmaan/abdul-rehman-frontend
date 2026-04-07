import Image from 'next/image';
import React from 'react';
import { FiPlay } from 'react-icons/fi';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black to-black"></div>

            {/* Decorative gradient blobs - responsive positioning */}
            <div className="absolute top-10 sm:top-20 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
                <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8 order-1 text-center">
                        {/* Small tag */}
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                            <span className="text-[10px] sm:text-xs font-medium text-white/70">
                                🎯 30% off until 4d : 2h : 41m : 17s
                            </span>
                        </div>


                        {/* Main Heading - Responsive sizes */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-7xl leading-tight font-medium">
                            Master Focus & Get
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                More Done in Less Time
                            </span>
                        </h1>


                        {/* Subheading - Responsive text */}
                        <p className="text-base sm:text-lg lg:text-[17px] text-white/60 leading-relaxed max-w-xl mx-auto">
                            A step-by-step program to eliminate distractions, boost deep work,
                            and reclaim hours every day with proven focus techniques.
                        </p>


                        {/* CTA Buttons - Mobile stacked, desktop side-by-side */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-fit mx-auto font-medium text-[17px]">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-blue-600/20 w-full sm:w-auto text-center cursor-pointer">
                                Enroll now
                            </button>
                            <button className="text-white/80 hover:text-white font-medium transition-colors duration-200 w-full sm:w-auto py-3 px-5 cursor-pointer">
                                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 flex-shrink-0 cursor-pointer"> */}
                                {/* <FiPlay className="text-white ml-0.5" size={16} /> */}
                                {/* </div> */}
                                Curriculum
                            </button>
                        </div>


                        {/* Stats/Social Proof - Responsive layout */}
                        {/* <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4"> */}
                        {/* <div className="flex-shrink-0"> */}
                        {/* <div className="text-2xl sm:text-3xl font-black text-white">20K+</div> */}
                        {/* <div className="text-xs sm:text-sm text-white/50 font-medium whitespace-nowrap">Active Students</div> */}
                        {/* </div> */}
                        {/* <div className="w-px h-10 sm:h-12 bg-white/10 hidden xs:block"></div> */}
                        {/* <div className="flex-shrink-0"> */}
                        {/* <div className="text-2xl sm:text-3xl font-black text-white">4.9</div> */}
                        {/* <div className="text-xs sm:text-sm text-white/50 font-medium whitespace-nowrap">Average Rating</div> */}
                        {/* </div> */}
                        {/* <div className="w-px h-10 sm:h-12 bg-white/10 hidden xs:block"></div> */}
                        {/* <div className="flex-shrink-0"> */}
                        {/* <div className="text-2xl sm:text-3xl font-black text-white">98%</div> */}
                        {/* <div className="text-xs sm:text-sm text-white/50 font-medium whitespace-nowrap">Completion Rate</div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>


                    {/* Right Content - Video/Image Section */}
                    <div className="relative order-1 lg:order-2">
                        {/* Main video container - Responsive sizing */}
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Video thumbnail */}
                            <div className="relative aspect-video sm:aspect-[4/3] bg-gradient-to-br from-gray-900 to-black">
                                {/* Replace with actual video thumbnail image */}
                                <Image
                                    src="https://res.cloudinary.com/dincextlz/image/upload/v1775415265/image_lhwaft.png"
                                    alt="Focus mastery video preview"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Play button overlay - Responsive size */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xl group cursor-pointer">
                                        <FiPlay className="text-black ml-0.5 sm:ml-1 group-hover:scale-110 transition-transform" size={24} />
                                    </button>
                                </div>


                                {/* Bottom info bar - Responsive padding and text */}
                                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4 md:p-6"> */}
                                {/* <div className="text-xs sm:text-sm font-medium text-white leading-relaxed"> */}
                                {/* If you struggle to focus, feel overwhelmed by endless tasks, */}
                                {/* or procrastinate instead of making progress, you're not alone. */}
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>


                        {/* Floating avatars - Responsive positioning and sizing */}
                        {/* <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-xl max-w-[90%] sm:max-w-none"> */}
                        {/* <div className="flex -space-x-2 sm:-space-x-3"> */}
                        {/* {/* <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-purple-600"></div> */}
                        {/* {/* <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-gradient-to-br from-pink-400 to-orange-600"></div> */}
                        {/* {/* <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-gradient-to-br from-green-400 to-teal-600"></div> */}
                        {/* </div> */}
                        {/* <div className="text-xs sm:text-sm"> */}
                        {/* <span className="font-bold text-white">2,000+</span> */}
                        {/* <span className="text-white/60 ml-1 hidden xs:inline">joined this week</span> */}
                        {/* <span className="text-white/60 ml-1 xs:hidden">joined</span> */}
                        {/* </div> */}
                        {/* </div> */}


                        {/* Decorative elements - Responsive sizing */}
                        <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;