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
    const [priceHistory, setPriceHistory] = useState(null);
    const [timeRange, setTimeRange] = useState('7'); // Default to 7 days
    const [performanceData, setPerformanceData] = useState(null);
    const [marketCapPercentage, setMarketCapPercentage] = useState(null)
    const [trendingData, setTrendingData] = useState(null);
    const [cryptoName, setCryptoName] = useState("");

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
                const options = {
                    method: 'GET',
                    headers: { accept: 'application/json', 'x-cg-demo-api-key': `${process.env.REACT_APP_X_CG_DEMO_API_KEY}` }
                };

                fetch('https://api.coingecko.com/api/v3/global', options)
                    .then(res => res.json())
                    .then(marketData => { setMarketCapPercentage(marketData); })
                    .catch(err => console.error(err));
                fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`, options)
                    .then(res => res.json())
                    .then(currentData => { setCryptoData(currentData); })
                    .catch(err => console.error(err));
                fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=${range}`, options)
                    .then(res => res.json())
                    .then(chartData => {
                        setPriceHistory(chartData.prices);                    
                    })
                    .catch(err => console.error(err));
            } catch (error) {
                console.error(`Error fetching ${crypto} data:`, error);
            }
        };

        fetchCryptoData(timeRange);
    }, [timeRange, crypto]);

    useEffect(() => {
        if (CryptoData && priceHistory) {
            const rangePrices = priceHistory.map(([timestamp, price]) => price);
            const rangeLow = Math.min(...rangePrices);
            const rangeHigh = Math.max(...rangePrices);
            const currentPrice = CryptoData.market_data.current_price.usd;

            const yearLow = CryptoData.market_data.atl.usd || rangeLow;
            const yearHigh = CryptoData.market_data.ath.usd || rangeHigh;

            setPerformanceData({
                rangeLow,
                rangeHigh,
                currentPrice,
                yearLow,
                yearHigh,
            });
        }
    }, [CryptoData, priceHistory]);

    const handleTimeRangeChange = (range) => {
        setTimeRange(range);
    };

    if (!CryptoData || !priceHistory || !performanceData || !marketCapPercentage) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading {crypto} data...</p>
            </div>
        );
    }

    const { rangeLow, rangeHigh, currentPrice, yearLow, yearHigh } = performanceData;

    return (
        <div className="min-h-screen max-w-[2500px] bg-gray-100 m-auto">
            <Navbar />
            <div className='text-md ml-2 mb-2 md:mb-0 md:ml-16 mt-4'>
                CryptoCurrencies <i className="fa-solid fa-angles-right"></i><span className=' ml-2 font-semibold'>{getCryptoAbbreviation1(crypto)}</span>
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
