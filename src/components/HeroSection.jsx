import Image from 'next/image';
import React from 'react';
import { FiPlay } from 'react-icons/fi';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>

            {/* Decorative gradient blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Small tag */}
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                            <span className="text-xs font-medium text-white/70">
                                🎯 Join 20,000+ students mastering productivity
                            </span>
                        </div>
                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                            Master Focus & Get
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                More Done in Less Time
                            </span>
                        </h1>
                        {/* Subheading */}
                        <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl">
                            A step-by-step program to eliminate distractions, boost deep work,
                            and reclaim hours every day with proven focus techniques.
                        </p>
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-blue-600/20">
                                Enroll now
                            </button>
                            <button className="flex items-center gap-3 text-white/80 hover:text-white font-medium transition-colors duration-200">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                                    <FiPlay className="text-white ml-0.5" size={18} />
                                </div>
                                <span>Calculate</span>
                            </button>
                        </div>
                        {/* Stats/Social Proof */}
                        <div className="flex items-center gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-black text-white">20K+</div>
                                <div className="text-sm text-white/50 font-medium">Active Students</div>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-black text-white">4.9</div>
                                <div className="text-sm text-white/50 font-medium">Average Rating</div>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div>
                                <div className="text-3xl font-black text-white">98%</div>
                                <div className="text-sm text-white/50 font-medium">Completion Rate</div>
                            </div>
                        </div>
                    </div>
                    {/* Right Content - Video/Image Section */}
                    <div className="relative">
                        {/* Main video container */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Video thumbnail - replace with actual image */}
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-black">
                                {/* Replace this div with your actual video thumbnail image */}
                                <Image
                                    src="/hero-video-thumbnail.jpg" // Replace with your actual image
                                    alt="Focus mastery video preview"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 bg-white/95 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xl group">
                                        <FiPlay className="text-black ml-1 group-hover:scale-110 transition-transform" size={32} />
                                    </button>
                                </div>
                                {/* Bottom info bar */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium text-white">
                                            If you struggle to focus, feel overwhelmed by endless tasks,
                                            or procrastinate instead of making progress, you're not alone.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating avatars */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-purple-600"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-pink-400 to-orange-600"></div>
                                <div className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-green-400 to-teal-600"></div>
                            </div>
                            <div className="text-sm">
                                <span className="font-bold text-white">2,000+</span>
                                <span className="text-white/60 ml-1">joined this week</span>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;