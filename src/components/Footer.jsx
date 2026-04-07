import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="relative bg-black text-white border-t border-white/10 pt-8 pb-15">
            {/* Top Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left */}
                    <div className="space-y-5 text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight">
                            The Deep
                            <br />
                            Work Blueprint
                        </h3>
                        <p className="text-white/60 text-sm md:text-base lg:text-[17px] max-w-md mx-auto md:mx-0">
                            Master Focus & Get More Done in Less Time
                        </p>
                    </div>
                    {/* Right CTA */}
                    <div className="w-full">
                        <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-300 group">
                            {/* Left Content */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                {/* Avatars */}
                                <div className="flex -space-x-2 sm:-space-x-3">
                                    {["https://res.cloudinary.com/dincextlz/image/upload/v1775416878/image_eenmnz.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775416989/image_waeojs.png", "https://res.cloudinary.com/dincextlz/image/upload/v1775417047/image_pmxtcf.png"].map((i, index) => (
                                        <div
                                            key={index}
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-600 overflow-hidden"
                                        >
                                            <Image
                                                src={i}
                                                alt="Student"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Text */}
                                <p className="text-white text-xs md:text-sm lg:text-[17px]">
                                    Join with 5K other students
                                </p>
                            </div>
                            {/* Arrow */}
                            <div className="shrink-0 cursor-pointer">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <FiArrowRight className="text-blue-600" size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                        {/* Copyright */}
                        <p className="text-white/50 text-[10px] md:text-xs lg:text-[15px] order-2 sm:order-1 text-center sm:text-left">
                            © Copyright 2024. All Rights Reserved
                        </p>
                        {/* Links */}
                        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 order-1 sm:order-2">
                            {[
                                { label: "Terms & conditions", href: "" },
                                { label: "Refund policy", href: "" },
                                { label: "Pricing", href: "" },
                                { label: "Support", href: "" },
                            ].map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="text-white/60 hover:text-white text-[10px] md:text-xs lg:text-[15px] transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;