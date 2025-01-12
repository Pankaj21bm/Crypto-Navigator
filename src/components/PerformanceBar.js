import React from 'react';

function PerformanceBar({ labelLow, labelHigh, low, high, current }) {
    const calcProgress = (value, min, max) => ((value - min) / (max - min)) * 100;
    const progress = calcProgress(current, low, high);

    return (
        <div className="mb-5 flex items-center">
            <div className="flex flex-col items-center mx-2 md:mr-10 md:ml-5">
                <span className="text-xs text-gray-500">{labelLow}</span>
                <span>${low.toFixed(2)}</span>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 mx-2 relative">
                <div
                    className="absolute left-1/2 top-2 transform -translate-x-1/2 text-center"
                    style={{ left: `${progress}%` }}
                >
                    <div
                        className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black"
                    ></div>
                    <span className="text-xs mt-2 block transform -translate-x-1/3">
                        ${current.toFixed(2)}
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-center mx-2 md:mr-10 md:ml-5">
                <span className="text-xs text-gray-500">{labelHigh}</span>
                <span>${high.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default PerformanceBar;
