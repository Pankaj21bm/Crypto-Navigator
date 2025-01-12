import React from 'react';

const CryptoHeader = ({ CryptoData, crypto }) => {

  function getCryptoAbbreviation(cryptoName) {
    return cryptoName.substring(0, 3).toUpperCase();
  }

  return (
    <div className="bg-white md:shadow-md p-1  md:p-6 md:pb-2 rounded-t-lg ">
      <div>
        <div className="flex items-center mb-5">
          <img src={CryptoData.image.small} alt="Logo" className="h-9 mr-1" />
          <h1 className="text-2xl font-bold mr-2">{CryptoData.name}</h1>
          <h1 className="text-lg font-medium text-gray-500 mr-6">{CryptoData.symbol.toUpperCase()}</h1>
          <p className="text-md text-white bg bg-slate-500 px-2 py-1 rounded-md">Rank #{CryptoData.market_cap_rank}</p>

        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-3xl font-bold mr-5">
          ${CryptoData.market_data.current_price.usd.toLocaleString()}
        </p>
        <div
          className="flex items-center text-sm font-medium"
        >
          <span
            className={`flex items-center justify-center gap-1 rounded p-1 ${CryptoData.market_data.price_change_percentage_24h > 0
              ? "bg-green-100 text-green-200"
              : "bg-red-100 text-red-200"
              }`}
          >
            {CryptoData.market_data.price_change_percentage_24h > 0 ? (

              <img src={`${process.env.PUBLIC_URL}/up.svg`} className='h-3 m-1' alt="" />
            ) : (
              <img src={`${process.env.PUBLIC_URL}/down.svg`} className='h-3 m-1' alt="" />
            )}
            <span
              className={`${CryptoData.market_data.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
                } mr-1`}
            >
              {CryptoData.market_data.price_change_percentage_24h.toFixed(2)}%
            </span>
          </span>
          <span className="text-gray-400 ml-3 text-md">(24H)</span>
        </div>

      </div>
      <div className=''>
        <p className="text-md font-semibold mt-1">
          ₹{CryptoData.market_data.current_price.inr.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CryptoHeader;
