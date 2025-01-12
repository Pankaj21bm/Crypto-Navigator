import React from 'react';

function AnalystEstimates() {
    return (
        <div className='mt-4 w-full mb-4'>
            <div className='flex gap-3 items-center mb-4'>
                <p className="text-lg font-semibold text-gray-600 text-start">Analyst Estimates</p>
                <div className='bg-gray-500 text-white w-4 h-4 text-center text-xs rounded-full'>i</div>
            </div>
            <div className="flex gap-10 items-center w-full">
                <div className="relative w-28 h-28 rounded-full bg-[#ebf9f4]">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-[#0fba83]">
                        76%
                    </span>
                </div>
                <div className="flex flex-col w-[60%]">
                    <div className="flex items-center">
                        <span className="text-gray-400 w-16 font-medium">Buy</span>
                        <div className='flex w-full items-center'>
                            <div className="w-[76%] h-2 bg-green-600 rounded-full" />
                            <span className="ml-2 text-gray-400">76%</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-400 w-16 font-medium">Hold</span>
                        <div className='flex w-full items-center'>
                            <div className="w-[8%] h-2 bg-gray-300 rounded-full" />
                            <span className="ml-2 text-gray-400">8%</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-400 w-16 font-medium">Sell</span>
                        <div className='flex w-full items-center'>
                            <div className="w-[16%] h-2 bg-red-500 rounded-full" />
                            <span className="ml-2 text-gray-400">16%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalystEstimates;