import React, { useEffect, useState } from "react";

const SideTrendingCoins = (trendingData) => {

    const [sortedData, setSortedData] = useState(null)


    useEffect(() => {
        const doSortData = trendingData?.trendingData?.coins?.sort((a, b) => {
            const changeA = a.item.data.price_change_percentage_24h.usd;
            const changeB = b.item.data.price_change_percentage_24h.usd;
            return changeB - changeA; // Descending order (highest percentage first)
        });
        setSortedData(doSortData.slice(0, 3));
    }, [trendingData])



    return (
        <div className="bg-white rounded-xl p-6 w-full mx-auto mt-6 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
                Trending Coins (24h)
            </h2>
            <ul className="space-y-4">
                {sortedData && sortedData?.map((coin) => (
                    <li key={coin.item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src={coin.item.small}
                                alt={coin.item.name}
                                className="w-7 h-7 mr-2 mx-auto rounded-full"
                            />
                            <span className="text-gray-800 font-medium">
                                {coin.item.name} ({coin.item.symbol.toUpperCase()})
                            </span>
                        </div>
                        <div
                            className="flex items-center text-sm"
                        >
                            <div
                                className={`flex items-center justify-center w-20 gap-1 rounded p-0.5 ${coin.item.data.price_change_percentage_24h.usd > 0
                                    ? "bg-[#f1fbf7] text-green-400"
                                    : " bg-[#fef0ee] text-red-400"
                                    }`}
                            >
                                {coin.item.data.price_change_percentage_24h.usd > 0 ? (

                                    <img src={`${process.env.PUBLIC_URL}/up.svg`} className='h-3 m-1' alt="" />
                                ) : (
                                    <img src={"/down.svg"} className='h-3 m-1' alt="" />
                                )}
                                <span
                                    className={`${coin.item.data.price_change_percentage_24h.usd > 0
                                        ? "text-green-400"
                                        : "text-red-400"
                                        } mr-1`}
                                >
                                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                </span>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideTrendingCoins;
