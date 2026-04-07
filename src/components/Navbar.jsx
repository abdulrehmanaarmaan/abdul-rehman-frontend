'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Graduates', href: '#graduates' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 py-6 px-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src='https://res.cloudinary.com/dincextlz/image/upload/v1775492170/image_gvblnc.png' alt='logo' width={70} height={70} />
                    </Link>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/70 hover:text-white transition-colors duration-200 text-[15px] lg:text-base"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 lg:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-200 active:scale-95 cursor-pointer font-medium">
                            Enroll now
                        </button>
                    </div>
                    {/* Mobile Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10">
                    <div className="px-4 md:px-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-white/70 hover:text-white py-2 text-sm sm:text-base"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg cursor-pointer">
                            Enroll now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;