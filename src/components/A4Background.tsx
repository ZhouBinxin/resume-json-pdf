import React from "react";

interface A4BackgroundProps {
    children: React.ReactNode;
    className?: string;
};

const A4Background: React.FC<A4BackgroundProps> = ({ children, className }) => {
    return (
        <div className={`print-remove-styles flex flex-col items-center bg-gray-300 overflow-auto ${className} transition-all duration-500 ease-in-out`}>
            <div className="print-remove-styles bg-white shadow-xl mt-20 mb-5">
                {children}
            </div>
        </div>
    );
};

export default A4Background;