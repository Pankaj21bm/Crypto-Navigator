import React, { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css'
import AnalystEstimates from './Analysis';

const SentimentFeed = () => {
    const feedItems = [
        {
            icon: <i className="fas fa-newspaper"></i>,
            title: 'Lorem ipsum dolor sit amet consectetur.',
            background: '#e8f4fd',
            description:
                'Dui vel quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
        },
        {
            icon: <i className="fas fa-chart-line"></i>,
            title: 'Lorem ipsum dolor sit amet consectetur.',
            background: '#ebf9f4',
            description:
                'Du quis dignissim mattis enim tincidunt. Lorem ipsum dolor sit amet consectetur. Ac risus est faucibus metus quis. Amet viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del.',
        },
    ];

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='bg-white p-2 md:p-5 rounded-lg w-full mt-5'>
            <div className="relative ">

                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-start">Sentiment</h2>
                <div className='flex gap-3 items-center mb-4'>
                    <p className="text-lg font-semibold text-gray-600 text-start">Key Events</p>
                    <div className='bg-gray-500 text-white w-4 h-4 text-center text-xs rounded-full'>i</div>
                </div>
                <div className="flex items-center relative">
                    {/* Left Scroll Button */}
                    <button
                        onClick={scrollLeft}
                        className="p-2 w-10 bg-white text-black rounded-full hover:bg-gray-100 absolute left-5 top-1/2 transform -translate-y-1/2"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-auto hide-scrollbar snap-x snap-mandatory scroll-smooth w-full"
                    >
                        {feedItems.map((item, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: item.background }}
                                className={`flex gap-3 flex-shrink-0 w-[80%] md:w-[50%] p-2 md:p-4 snap-start rounded-lg pb-8`}
                            >
                                <div className="text-blue-500 text-3xl mb-2">{item.icon}</div>
                                <div >
                                    <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={scrollRight}
                        className="p-2 w-10 bg-white-500 bg-white text-black rounded-full hover:bg-gray-100 absolute right-0 top-1/2 transform -translate-y-1/2"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

            </div>
            <AnalystEstimates />
        </div>
    );
};

export default SentimentFeed;
