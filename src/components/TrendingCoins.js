import React, { useEffect, useState, useRef } from "react";
import '../App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const TrendingCoins = ({ setTrendingData }) => {
  const [currentTrending, setCurrentTrendingData] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const options = {
          method: 'GET',
          headers: { accept: 'application/json', 'x-cg-demo-api-key': `${process.env.REACT_APP_X_CG_DEMO_API_KEY}` }
        };
        fetch('https://api.coingecko.com/api/v3/search/trending', options)
          .then(res => res.json())
          .then(responseData => {
            setCurrentTrendingData(responseData);
            setTrendingData(responseData);
          })
          .catch(err => console.error(err));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const scrollLeft1 = () => {
    scrollContainerRef1.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight1 = () => {
    scrollContainerRef1.current.scrollBy({ left: 600, behavior: 'smooth' });
  };
  const scrollLeft2 = () => {
    scrollContainerRef2.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight2 = () => {
    scrollContainerRef2.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <div className="p-2 md:p-12 md:px-16 bg-white mt-0 md:mt-16">
      <div>
        <h2 className="text-2xl font-bold mb-4 ml-1 md:ml-4">You May Also Like</h2>
        <div className="flex items-center relative">

          <button
            onClick={scrollLeft1}
            className="p-0 w-8 h-8 bg-white border text-black rounded-full hover:bg-gray-100 absolute left-1 md:-left-2 top-1/2 transform -translate-y-1/2"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div ref={scrollContainerRef1} className="flex space-x-2 overflow-auto hide-scrollbar">
            {currentTrending?.coins.map((coin, index) => (
              <div
                key={index}
                className="border flex flex-col items-start rounded-lg p-5 min-w-[60%] md:min-w-[40%] lg:min-w-[20%]"
              >
                <div className="flex gap-0 items-center mb-2">

                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    className="w-7 h-7 mr-2 mx-auto rounded-full"
                  />
                  <p className="text-lg font-semibold">
                    {coin.item.symbol.toUpperCase()}
                  </p>
                  <div
                    className="flex items-center text-sm"
                  >
                    <div
                      className={`flex items-center justify-center rounded p-0.5 ${coin.item.data.price_change_percentage_24h.usd > 0
                        ? "bg-[#f1fbf7] text-green-400"
                        : " bg-[#fef0ee] text-red-400"
                        }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                        "+"
                      ) : (
                        ""
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
                </div>
                <p className="text-center text-black text-2xl">
                  ${coin.item.price_btc.toFixed(8)}
                </p>
                <div className="flex items-center justify-center w-[80%] mt-3 self-center">
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.symbol} sparkline`}
                    className=" w-full object-fill "
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight1}
            className="p-0 w-8 h-8 bg-white-500 bg-white border text-black rounded-full hover:bg-gray-100 absolute right-1 md:-right-6 top-1/2 transform -translate-y-1/2"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

        </div>
      </div>


      <div className="mt-4 mb-10">
        <h2 className="text-2xl font-bold mb-4 ml-1 md:ml-4">Trending Coins</h2>
        <div className="flex items-center relative">

          <button
            onClick={scrollLeft2}
            className="p-0 w-8 h-8 bg-white border text-black rounded-full hover:bg-gray-100 absolute left-1 md:-left-2 top-1/2 transform -translate-y-1/2"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div ref={scrollContainerRef2} className="flex space-x-2 overflow-auto hide-scrollbar">
            {currentTrending?.coins.map((coin, index) => (
              <div
                key={index}
                className="border flex flex-col items-start rounded-lg p-5 min-w-[60%]  md:min-w-[40%] lg:min-w-[20%]"
              >
                <div className="flex gap-2 items-center mb-2">

                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    className="w-7 h-7 mx-auto rounded-full"
                  />
                  <p className="text-lg font-semibold">
                    {coin.item.symbol.toUpperCase()}
                  </p>
                  <div
                    className="flex items-center text-sm"
                  >
                    <div
                      className={`flex items-center justify-center rounded p-0.5 ${coin.item.data.price_change_percentage_24h.usd > 0
                        ? "bg-[#f1fbf7] text-green-400"
                        : " bg-[#fef0ee] text-red-400"
                        }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                        "+"
                      ) : (
                        ""
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
                </div>
                <p className="text-center text-black text-2xl">
                  ${coin.item.price_btc.toFixed(8)}
                </p>
                <div className="flex items-center justify-center w-[80%] mt-3 self-center">
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.symbol} sparkline`}
                    className=" w-full object-fill "
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight2}
            className="p-0 w-8 h-8 bg-white-500 bg-white border text-black rounded-full hover:bg-gray-100 absolute right-1 md:-right-6 top-1/2 transform -translate-y-1/2"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

        </div>
      </div>

    </div>
  );
};

export default TrendingCoins;
