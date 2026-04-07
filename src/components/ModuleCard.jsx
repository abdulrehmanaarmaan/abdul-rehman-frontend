import React from 'react';
import { FiChevronDown, FiChevronUp, FiLock, FiPlay } from 'react-icons/fi';

const ModuleCard = ({ module, isExpanded, onToggle }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            {/* Module Header */}
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 sm:p-6 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
            >
                <div className="flex items-start gap-4 text-left flex-1">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-[20px] font-medium text-white mb-1 pr-4">
                            {module.title}
                        </h3>
                        <p className="text-xs md:text-[15px] text-white/50">
                            {module.duration}
                        </p>
                    </div>
                </div>
                <div className="shrink-0 ml-2">
                    {isExpanded ? (
                        <FiChevronUp className="text-white/70" size={20} />
                    ) : (
                        <FiChevronDown className="text-white/70" size={20} />
                    )}
                </div>
            </button>
            {/* Module Lessons */}
            {isExpanded && (
                <div className="border-t border-white/10">
                    <div className="p-4 sm:p-6 space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                            <div
                                key={lessonIndex}
                                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${lesson.locked
                                        ? 'bg-white/5'
                                        : 'bg-blue-600/20 group-hover:bg-blue-600/30'
                                        }`}>
                                        {lesson.locked ? (
                                            <FiLock className="text-white/30" size={14} />
                                        ) : (
                                            <FiPlay className="text-blue-400" size={14} />
                                        )}
                                    </div>
                                    <span className={`text-[13px] md:text-[17px] font-medium truncate ${lesson.locked ? 'text-white/40' : 'text-white/70 group-hover:text-white'
                                        }`}>
                                        {lesson.title}
                                    </span>
                                </div>
                                <span className={`text-[13px] md:text-[17px] font-medium ml-3 shrink-0 ${lesson.locked ? 'text-white/30' : 'text-white/50'
                                    }`}>
                                    {lesson.duration}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModuleCard;