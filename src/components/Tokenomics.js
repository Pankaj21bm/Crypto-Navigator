import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    const data = {
        labels: ['Crowdsale investors', 'Foundation'],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: ['#007bff', '#f39c12'],
                borderWidth: 0,
                borderColor: '#fff',
                cutout: '65%'
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg mt-4 hidden md:block">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Tokenomics</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Initial Distribution</h2>

            <div className="flex items-center justify-start gap-8 mb-6">
                <div className="w-48 h-48">
                    <Pie data={data} options={options} />
                </div>
                <div>
                    <p className="flex items-center gap-2 text-lg text-gray-600">
                        <span className="w-3 h-3 bg-blue-500 inline-block rounded-full"></span>
                        Crowdsale investors: 80%
                    </p>
                    <p className="flex items-center gap-2 text-lg text-gray-600">
                        <span className="w-3 h-3 bg-yellow-500 inline-block rounded-full"></span>
                        Foundation: 20%
                    </p>
                </div>
            </div>

            <p className="text-gray-600 text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
                consequat. Leo etiam nascetur bibendum amet enim sit eget Ieo amet. At metus orci augue fusce eleifend
                lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
                fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
                eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
                odio nisi eu ac risus.
            </p>
        </div>
    );
};

export default Tokenomics;
