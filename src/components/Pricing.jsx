import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="scroll-mt-20 relative bg-black text-white py-14 sm:py-16 lg:py-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left - Course Info */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 md:px-4 py-2 mb-5">
                            <span className="flex items-center gap-2 text-[10px] md:text-[15px] text-white/70">
                                <span className='rounded-full h-2 w-2 bg-[#2466F2]' /> Introducing
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-[40px] font-medium">
                            The Deep Work Blueprint
                        </h3>
                        <ul className="space-y-3 mt-6">
                            <li className="flex gap-3 text-xs sm:text-sm text-white/80">
                                <div className="w-4 h-4 bg-blue-600 rounded-full shrink-0 mt-1"></div>
                                <span className='text-[15px]'>Bonus: 11 coaching sessions to boost focus</span>
                            </li>
                            <li className="flex gap-3 text-xs sm:text-sm text-white/80">
                                <div className="w-4 h-4 bg-blue-600 rounded-full shrink-0 mt-1"></div>
                                <span className='text-[15px]'>Discount: Save 30% when you enroll now</span>
                            </li>
                        </ul>
                    </div>
                    {/* Right - Pricing */}
                    <div>
                        <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-6">
                            <div className="flex items-end gap-2 sm:gap-3 flex-wrap">
                                <span className="text-4xl md:text-5xl lg:text-[52px] font-medium">
                                    $349
                                </span>
                                <span className="text-lg md:text-[28px] text-white/40 line-through font-medium">
                                    $500
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Real Lessons - Step-by-step video walkthroughs",
                                    "Templates & Toolkits - Direct practical frameworks",
                                    "Live Q&As - Expert guidance & accountability",
                                    "Exclusive Community - Connect with others",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-xs sm:text-sm text-white/80">
                                        <div className="w-4 h-4 bg-blue-600 rounded-full shrink-0 mt-1"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm md:text-[17px] font-medium cursor-pointer hover:bg-blue-700 transition-all duration-200 active:scale-95">
                                Enroll now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;