import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom'; // Import the zoom plugin
import TimeRangeButtons from './TimeRangeButtons';

// Register Chart.js plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const CryptoChart = ({ priceHistory, timeRange, handleTimeRangeChange, crypto, CryptoData }) => {
    const chartRef = useRef(null);
    function getCryptoAbbreviation(cryptoName) {
        return cryptoName.substring(0, 1).toUpperCase() + cryptoName.substring(1);
    }

    useEffect(() => {
        if (chartRef.current && priceHistory?.length > 0) {
            const ctx = chartRef.current.getContext("2d");

            let labels = [];
            let prices = [];
            let unit = "day";
            let interval = 1;

            switch (timeRange) {
                case "1":
                    unit = "hour";
                    interval = 1;
                    break;
                case "7":
                    unit = "day";
                    interval = 1;
                    break;
                case "30":
                    unit = "day";
                    interval = 1;
                    break;
                case "90":
                    unit = "day";
                    interval = 7;
                    break;
                case "180":
                    unit = "week";
                    interval = 1;
                    break;
                case "365":
                    unit = "week";
                    interval = 1;
                    break;
                case "max":
                    unit = "month";
                    interval = 1;
                    break;
                default:
                    break;
            }

            // Extract and adjust data
            for (let i = 0; i < priceHistory.length; i++) {
                if (i % interval === 0) {
                    const dates = new Date(priceHistory[i][0])
                    const newDate = String(dates.getDate()) + " " + dates.toLocaleString('default', { month: 'short' });
                    labels.push(newDate);
                    prices.push(priceHistory[i][1]);
                }
            }

            const minYValue = Math.min(...prices);

            if (chartRef.current._chartInstance) {
                chartRef.current._chartInstance.destroy();
            }

            chartRef.current._chartInstance = new Chart(ctx, {
                type: "line",
                data: {
                    labels,
                    datasets: [
                        {
                            label: "Bitcoin Price (USD)",
                            data: prices,
                            borderColor: "#0052fe",
                            backgroundColor: "rgb(0, 82, 254,0.1)",
                            fill: true,
                            tension: 0.1,
                            pointRadius: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        zoom: {
                            pan: {
                                enabled: true,
                                mode: 'xy',
                                threshold: 10,
                            },
                            wheel: {
                                enabled: true,
                                mode: 'xy',
                                speed: 0.1,
                                sensitivity: 3,
                                threshold: 2,
                            },
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 10,
                            },
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            beginAtZero: false,
                            min: minYValue * 0.99,
                        },
                    },
                },
            });

            const resizeChart = () => {
                if (chartRef.current._chartInstance) {
                    chartRef.current._chartInstance.resize();
                }
            };
            window.addEventListener("resize", resizeChart);
            return () => {
                window.removeEventListener("resize", resizeChart);
            };
        }
    }, [priceHistory, timeRange]);


    return (
        <div className="bg-white shadow-md p-3 lg:p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center mb-6">
                <h2 className="text-xl font-extrabold text-black-600 mb-0 ">
                    {getCryptoAbbreviation(crypto)} Price Chart (USD)
                </h2>
                <TimeRangeButtons handleTimeRangeChange={handleTimeRangeChange} />
            </div>

            <div className="overflow-x-auto overflow-y-auto">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default CryptoChart;


