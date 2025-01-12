import React, { useEffect, useState } from 'react';
import CryptoHeader from './CryptoHeader';
import CryptoChart from './CryptoChart';
import CryptoMarketData from './CryptoMarketData';
import PerformanceBar from './PerformanceBar';
import Navbar from './Navbar';
import SentimentFeed from './Sentiments';
import AnalystEstimates from './Analysis';
import CryptoInfo from './AboutCrypto';
import Tokenomics from './Tokenomics';
import Team from './Team';
import TrendingCoins from './TrendingCoins';
import SideBar from './SideBar';

const CryptoDashBoard = ({ crypto }) => {
    const [CryptoData, setCryptoData] = useState(null);
    const [priceHistory, setPriceHistory] = useState([]);
    const [timeRange, setTimeRange] = useState('7'); // Default to 7 days
    const [performanceData, setPerformanceData] = useState(null);
    const [marketCapPercentage, setMarketCapPercentage] = useState(null)
    const [trendingData, setTrendingData] = useState(null);
    const [cryptoName, setCryptoName] = useState();

    const getRangeName = () => {
        if (timeRange === '1') return ["Today's Low", "Today's High"];
        if (timeRange === '7') return ["7-Day Low", "7-Day High"];
        if (timeRange === '30') return ["30-Day Low", "30-Day High"];
        if (timeRange === '90') return ["3-Month Low", "3-Month High"];
        if (timeRange === '180') return ["6-Month Low", "6-Month High"];
        if (timeRange === '365') return ["1-Year Low", "1-Year High"];
        if (timeRange === 'max') return ["All Time Low", "All Time High"];
    }

    function getCryptoAbbreviation1(cryptoNamee) {
        return cryptoNamee.substring(0, 1).toUpperCase() + cryptoNamee.substring(1);
    }

    useEffect(() => {
        const name = getCryptoAbbreviation1(crypto);
        setCryptoName(name);
    }, [crypto])


    useEffect(() => {
        const fetchCryptoData = async (range) => {
            try {
                const marketresponse = await fetch('https://api.coingecko.com/api/v3/global');
                const marketData = await marketresponse.json();
                const currentResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`);
                const currentData = await currentResponse.json();
                const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=${range}`);
                const chartData = await chartResponse.json();

                setMarketCapPercentage(marketData);
                setCryptoData(currentData);
                setPriceHistory(chartData.prices);

                const rangePrices = chartData.prices.map(([timestamp, price]) => price);
                const rangeLow = Math.min(...rangePrices);
                const rangeHigh = Math.max(...rangePrices);
                const currentPrice = currentData.market_data.current_price.usd;

                const yearLow = currentData.market_data.low_24h.usd || rangeLow;
                const yearHigh = currentData.market_data.high_24h.usd || rangeHigh;

                setPerformanceData({
                    rangeLow,
                    rangeHigh,
                    currentPrice,
                    yearLow,
                    yearHigh,
                });
            } catch (error) {
                console.error(`Error fetching ${crypto} data:`, error);
            }
        };

        fetchCryptoData(timeRange);
    }, [timeRange]);

    const handleTimeRangeChange = (range) => {
        setTimeRange(range);
    };

    if (!CryptoData || !performanceData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading {crypto} data...</p>
            </div>
        );
    }

    const { rangeLow, rangeHigh, currentPrice, yearLow, yearHigh } = performanceData;

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className='text-md ml-2 mb-2 md:mb-0 md:ml-16 mt-4'>
                CryptoCurrencies <i class="fa-solid fa-angles-right"></i><span className=' ml-2 font-semibold'>{getCryptoAbbreviation1(crypto)}</span>
            </div>
            <div className="grid grid-cols-12 ml-1 mr-1 lg:ml-8">
                <div className="col-span-12 md:col-span-8 p-1 lg:p-6 lg:pt-4 ml-0">
                    <CryptoHeader crypto={crypto} CryptoData={CryptoData} />
                    <CryptoChart
                        crypto={crypto}
                        CryptoData={CryptoData}
                        priceHistory={priceHistory}
                        timeRange={timeRange}
                        handleTimeRangeChange={handleTimeRangeChange}
                    />
                    <div className="mt-6 mb-0 pb-4 pt-4 bg-white">
                        <h2 className="text-2xl font-semibold mb-4 ml-2 lg:ml-5">Performance</h2>
                        <PerformanceBar
                            labelLow={getRangeName(timeRange)[0]}
                            labelHigh={getRangeName(timeRange)[1]}
                            low={rangeLow}
                            high={rangeHigh}
                            current={currentPrice}
                        />
                        <PerformanceBar
                            labelLow="52W Low"
                            labelHigh="52W High"
                            low={yearLow}
                            high={yearHigh}
                            current={currentPrice}
                        />
                    </div>
                    <CryptoMarketData crypto={crypto} CryptoData={CryptoData} marketCapPercentage={marketCapPercentage} />
                    <SentimentFeed />
                    <CryptoInfo cryptoName={cryptoName} />
                    <Tokenomics />
                    <Team />
                </div>
                <div className='col-span-12 block md:hidden'>
                    <TrendingCoins setTrendingData={setTrendingData} />
                </div>
                <div className="col-span-12 md:col-span-4 mt-0 md:mt-4 ml-1 lg:mr-14">
                    {trendingData && <SideBar trendingData={trendingData} />}
                </div>
            </div>
            <div className='hidden md:block'>
                <TrendingCoins setTrendingData={setTrendingData} />
            </div>
        </div>
    );
};

export default CryptoDashBoard;
