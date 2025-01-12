import React from 'react';

const TimeRangeButtons = ({ handleTimeRangeChange }) => {
    return (
        <div className="flex space-x-1">
            <button
                onClick={() => handleTimeRangeChange("1")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                24H
            </button>
            <button
                onClick={() => handleTimeRangeChange("7")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                7D
            </button>
            <button
                onClick={() => handleTimeRangeChange("30")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                1M
            </button>
            <button
                onClick={() => handleTimeRangeChange("90")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                3M
            </button>
            <button
                onClick={() => handleTimeRangeChange("180")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                6M
            </button>
            <button
                onClick={() => handleTimeRangeChange("365")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                1Y
            </button>
            <button
                onClick={() => handleTimeRangeChange("max")}
                className="btn-time-range text-gray-500 font-semibold text-xs py-0 px-2 rounded-xl hover:bg-gray-300 hover:text-blue-500 transition duration-200"
            >
                ALL
            </button>
        </div>
    );
};

export default TimeRangeButtons;
