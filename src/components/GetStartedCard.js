import React from "react";

const GetStartedCard = () => {
    return (
        <div className="bg-[#0052fe] text-white flex flex-col gap-2 items-center  rounded-2xl p-8 w-full mx-auto pb-14">
            <div className="w-[90%] flex flex-col gap-4 items-center content-center">

                <h2 className="w-[80%] text-2xl font-bold text-center leading-10">
                    Get Started with KoinX for FREE
                </h2>

                <p className="text-md text-center leading-7">
                    With our range of features that you can equip for free, KoinX allows you
                    to be more educated and aware of your tax reports.
                </p>
            </div>

            {/* Illustration */}
            <div className="flex justify-center mb-7 mt-8">
                <img
                    src={`${process.env.PUBLIC_URL}/pic.svg`}
                    alt="KoinX Illustration"
                    className="w-44 h-auto"
                />
            </div>

            {/* Button */}
            <div className="text-center">
                <button className="bg-white text-black text-lg font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition">
                    Get Started for FREE →
                </button>
            </div>
        </div>
    );
};

export default GetStartedCard;
