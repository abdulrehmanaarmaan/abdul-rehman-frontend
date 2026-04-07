'use client'
import React, { useState } from 'react';
import ModuleCard from './ModuleCard';

const CourseModules = () => {

    const [expandedModules, setExpandedModules] = useState([0]); // First module expanded by default

    const toggleModule = moduleIndex => {
        if (expandedModules.includes(moduleIndex)) {
            setExpandedModules(expandedModules.filter(i => i !== moduleIndex));
        } else {
            setExpandedModules([...expandedModules, moduleIndex]);
        }
    };

    const modules = [
        {
            title: "Module 1: Foundations of Deep Work",
            duration: "1 hr 20 min",
            lessons: [
                { title: "Understanding Focus & Distraction", duration: "14:23", locked: false },
                { title: "The Science Behind Deep Work", duration: "22:11", locked: false },
                { title: "Identifying Your Productivity Killers", duration: "18:45", locked: false },
                { title: "How to Strengthen Your Attention Span", duration: "27:08", locked: false }
            ]
        },
        {
            title: "Module 2: Building Your Deep Work Routine",
            duration: "1 hr 45 min",
            lessons: [
                { title: "Creating Your Ideal Work Environment", duration: "16:32", locked: false },
                { title: "Time Blocking Mastery", duration: "24:18", locked: false },
                { title: "Digital Minimalism Strategies", duration: "19:45", locked: false },
                { title: "Building Sustainable Focus Habits", duration: "25:12", locked: false }
            ]
        },
        {
            title: "Module 3: Eliminating Procrastination",
            duration: "1 hr 15 min",
            lessons: [
                { title: "Understanding Why We Procrastinate", duration: "14:28", locked: true },
                { title: "The 2-Minute Rule in Action", duration: "18:35", locked: true },
                { title: "Overcoming Analysis Paralysis", duration: "21:42", locked: true },
                { title: "Accountability Systems That Work", duration: "20:15", locked: true }
            ]
        },
        {
            title: "Module 4: Advanced Focus & Productivity Hacks",
            duration: "2 hr 10 min",
            lessons: [
                { title: "The Pomodoro Technique 2.0", duration: "15:48", locked: true },
                { title: "Energy Management vs Time Management", duration: "22:33", locked: true },
                { title: "Flow State Triggers", duration: "19:27", locked: true },
                { title: "Batch Processing for Maximum Efficiency", duration: "28:42", locked: true }
            ]
        }
    ];

    return (
        <section className="relative bg-black text-white py-14 sm:py-16 lg:py-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-75 sm:w-96 h-75 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-75 sm:w-96 h-75 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 md::px-4 py-1.5 md:py-2 mb-5 md:mb-6">
                        <span className="flex items-center gap-2 text-xs md:text-[15px] text-[#D0D5D9]">
                            <span className='rounded-full h-2 w-2 bg-[#2466F2]' /> Course Curriculum
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-[40px] font-medium mb-4 leading-tight max-w-3xl mx-auto">
                        Mastering Deep Work: A Structured
                        <br className="hidden sm:block" />
                        <span className="bg-clip-text">
                            Path to Peak Productivity
                        </span>
                    </h2>
                </div>
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    {/* Left Column */}
                    <div className='space-y-4 md:space-y-5'>
                        <div className="space-y-4 md:space-y-5">
                            {modules.slice(0, 2).map((module, index) => (
                                <ModuleCard
                                    key={index}
                                    module={module}
                                    moduleIndex={index}
                                    isExpanded={expandedModules.includes(index)}
                                    onToggle={() => toggleModule(index)}
                                />
                            ))}
                        </div>
                        {/* Right Column */}
                        <div className="space-y-4 md:space-y-5">
                            {modules.slice(2).map((module, index) => (
                                <ModuleCard
                                    key={index + 2}
                                    module={module}
                                    moduleIndex={index + 2}
                                    isExpanded={expandedModules.includes(index + 2)}
                                    onToggle={() => toggleModule(index + 2)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Info Card */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4">
                        <h3 className="text-base md:text-[28px] font-medium text-white">
                            Not only video lessons!
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                "Real Lessons - Step-by-step video walkthroughs",
                                "Templates & Toolkits - Direct practical frameworks",
                                "Live Q&As - Expert guidance & accountability",
                                "Exclusive Community - Connect with others",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/70">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                                    <span className='text-[13px] md:text-[15px]'>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-[17px] font-medium py-2.5 md:py-3 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer">
                            Enroll now
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CourseModules;