'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialsSection = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Alex Carter",
            role: "Freelance Designer",
            image: "https://res.cloudinary.com/dincextlz/image/upload/v1775417287/image_xyvnqg.png", // Replace with actual image
            quote: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!"
        },
        {
            name: "Daniel Foster",
            role: "Software Engineer",
            image: "https://res.cloudinary.com/dincextlz/image/upload/v1775417403/image_paiix9.png", // Replace with actual image
            quote: "I never realized how much time I was wasting until I took this course. The strategies are simple but incredibly effective. My productivity has doubled."
        },
        {
            name: "Mark Davidson",
            role: "Software Developer",
            image: "https://res.cloudinary.com/dincextlz/image/upload/v1775417484/image_dd9jgc.png", // Replace with actual image
            quote: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative bg-black text-white py-14 sm:py-16 lg:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-5">
                        <span className="text-[10px] md:text-[15px] text-white/70">
                            💬 Testimonials
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight font-medium">
                        Real Results from
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Real People
                        </span>
                    </h2>
                </div>
                {/* Testimonial Content */}
                <div>
                    <p className="text-xs md:text-[28px] text-white/60 mb-5 font-medium ml-6 ">
                        Join with 5K other students
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 min-h-[300px] sm:min-h[360px] flex flex-col justify-between">
                        <p className="text-white/80 text-sm md:text-base lg:text-[17px] leading-relaxed">
                            {testimonials[currentTestimonial].quote}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 mt-6">
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                                <Image
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-medium text-white text-sm md:text-base lg:text-xl">
                                    {testimonials[currentTestimonial].name}
                                </h4>
                                <p className="text-white/60 text-xs md:text-[15px]">
                                    {testimonials[currentTestimonial].role}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Controls */}
                    <div className="flex flex-col items-center gap-3 mt-6">
                        <div className="flex gap-3">
                            <button
                                onClick={prevTestimonial}
                                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full cursor-pointer"
                            >
                                <FiChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full cursor-pointer"
                            >
                                <FiChevronRight size={18} />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`h-2 rounded-full${index === currentTestimonial
                                        ? "w-6 sm:w-8 bg-blue-500"
                                        : "w-2 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;