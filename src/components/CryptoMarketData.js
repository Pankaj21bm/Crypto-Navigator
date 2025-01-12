import React from 'react';

const CryptoMarketData = ({ CryptoData, crypto, marketCapPercentage }) => {
    console.log(marketCapPercentage)
    const symbol = CryptoData.symbol;
    console.log(symbol)
    function getCryptoAbbreviation(cryptoName) {
        return cryptoName.substring(0, 3).toUpperCase();
    }
    function getCryptoAbbreviation1(cryptoName) {
        return cryptoName.substring(0, 1).toUpperCase() + cryptoName.substring(1);
    }

    const allTimeHighChangePercentage = () => {
        const allTimeHigh = CryptoData.market_data.ath.usd;
        const current = CryptoData.market_data.current_price.usd;

        const percentage = ((current - allTimeHigh) / allTimeHigh) * 100;
        return percentage.toFixed(2);
    }
    const allTimeLowChangePercentage = () => {
        const allTimeLow = CryptoData.market_data.atl.usd;
        const current = CryptoData.market_data.current_price.usd;

        const percentage = ((current - allTimeLow) / allTimeLow) * 100;
        return percentage.toFixed(2);
    }

    return (
        <div className="bg-white p-2 md:p-6">
            <div className='flex gap-3 items-center mb-4'>
                <h2 className="text-lg font-semibold">Fundamentals</h2>
                <div className='bg-gray-500 text-white w-4 h-4 text-center text-xs rounded-full'>i</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-x-24 divide-y divide-gray-200">
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">{getCryptoAbbreviation1(crypto)} Price</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        ${CryptoData.market_data.current_price.usd.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">Market Cap</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        ${CryptoData.market_data.market_cap.usd.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">24H Low / 24H High</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        ${CryptoData.market_data.low_24h.usd.toLocaleString()} / ${' '}
                        {CryptoData.market_data.high_24h.usd.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">Market Cap Dominance</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        {marketCapPercentage.data.market_cap_percentage[symbol].toFixed(2)}%
                    </p>
                </div>
                <div className="flex justify-between items-center h-12 sm:border-b-2">
                    <p className="text-sm md:text-md text-gray-500">Volume / Market Cap</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        {(
                            marketCapPercentage.data.total_volume[symbol] /
                            marketCapPercentage.data.total_market_cap[symbol]
                        ).toFixed(5)}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">Trading Volume</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        ${CryptoData.market_data.total_volume.usd.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">Circulating Supply</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        {CryptoData.market_data.circulating_supply.toLocaleString()} {CryptoData.symbol.toUpperCase()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">Market Cap Rank</p>
                    <p className="font-bold text-sm md:text-md text-gray-600 pr-3">
                        #{CryptoData.market_data.market_cap_rank.toLocaleString()}
                    </p>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">All-Time High</p>
                    <div className="text-right pr-3">
                        <div className="flex gap-2">
                            <p className="font-bold text-sm md:text-md text-gray-600">
                                ${CryptoData.market_data.ath.usd.toLocaleString()}
                            </p>
                            <p className="font-bold text-sm md:text-md text-red-500">
                                {allTimeHighChangePercentage()}%
                            </p>
                        </div>
                        <p className="text-sm md:text-md text-gray-500">
                            {new Date(CryptoData.market_data.ath_date.usd).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center h-12">
                    <p className="text-sm md:text-md text-gray-500">All-Time Low</p>
                    <div className="text-right pr-3">
                        <div className="flex gap-2">
                            <p className="font-bold text-sm md:text-md text-gray-600">
                                ${CryptoData.market_data.atl.usd.toLocaleString()}
                            </p>
                            <p className="font-bold text-sm md:text-md text-green-500">
                                {allTimeLowChangePercentage()}%
                            </p>
                        </div>
                        <p className="text-sm md:text-md text-gray-500">
                            {new Date(CryptoData.market_data.atl_date.usd).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CryptoMarketData;
