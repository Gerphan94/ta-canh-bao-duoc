import React, { useState } from "react";

export const ButtonTooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative flex items-center justify-center h-full">
            <div
                className="cursor-pointer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                {children}
            </div>

            {showTooltip && (
                <div className="absolute right-0 top-[-0.7rem] transform -translate-y-3/4 ml-2 px-2 py-1 bg-[#031C30] text-white rounded text-xs z-50 truncate">
                    {text}
                </div>
            )}
        </div>
    );
};

