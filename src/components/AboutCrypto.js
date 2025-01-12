import React from 'react';

const CryptoInfo = ({ cryptoName }) => {

    function getCryptoAbbreviation1(cyrpto) {
        console.log(cryptoName)
        return cyrpto?.substring(0, 1).toUpperCase() + cyrpto?.substring(1);
    }

    return (
        <div className="container mx-auto p-5 pt-3 bg-white mt-4">
            <section className="mb-4">
                <h1 className="text-2xl font-bold">About {getCryptoAbbreviation1(cryptoName)}</h1>
                <div className='flex flex-col border-b-2 pb-4 mt-4'>

                    <p className="text-xl font-bold mb-2">What is {getCryptoAbbreviation1(cryptoName)}?</p>
                    <p className="text-gray-600 text-lg font-medium">{getCryptoAbbreviation1(cryptoName)}'s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                </div>
                <div className='flex flex-col border-b-2 pb-4 mt-4'>
                    <p className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</p>
                    <p className="text-gray-600 text-lg font-medium flex flex-col gap-5">
                        <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus
                            urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
                            fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
                            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                        </p>
                        <p>
                            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
                            Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus
                            enim dui. Turpis tristique placerat interdum sed volutpat. ld imperdiet magna eget eros donec cursus nunc.
                            Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
                            phasellus. Integer pellentesque enim convallis ultricies at.
                        </p>
                        <p>
                            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
                            semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
                            amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                        </p>
                    </p>
                </div>
            </section>

            <section className="mt-1 border-b-2">
                <h2 className="text-2xl font-semibold mb-4">Already Holding {getCryptoAbbreviation1(cryptoName)}?</h2>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 mb-4">
                    <div className="flex flex-row gap-8 items-start md:items-center card bg-[linear-gradient(to_bottom_right,#77eea4,#105ead)] w-[100%] md:w-[50%] text-white p-3 rounded-lg shadow-lg">
                        <img src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIpcdewbeHvpF0MrAHY9Lvoj0pca~n77kDxgd55mI~LL6DhUVkQkiHr5pBEMM7AtTgJ3r50AD5rDtCXdoDGT56v03G1oM0r4wyjQQsqlRn7plrafv4xMISOsNszaNThUXSJrUlWt~XLXr7r86YIkB5PwI3lVDyklbGy~48E2qc86bk25uWBfyp2yk-BGZORYlvmG4DNJRnQ8qtcIJ8nj1kxPzIKT4O676Cdkfd09WRDGFQLhBevRjdipHN7UW6y1LZz651u9k7qWHX-nCLWNBhpwzx4i0aH4FddzREaKCwnmK~DAkruz1qAfUnsFZLCClIobUtEFP58DdJkB8Iyc1A__" alt="Calculate Profits" className=" rounded-lg w-36 h-36 object-cover object-right" />
                        <div>
                            <h3 className="text-2xl font-semibold">Calculate your Profits</h3>
                            <button className="mt-4 bg-white font-semibold text-black py-2 px-4 rounded-lg">Check Now →</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 items-center card bg-[linear-gradient(to_bottom_right,#ff9664,#f13c37)] w-[100%] md:w-[50%] text-white p-3 rounded-lg shadow-lg">
                        <img src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4l6utWlIkrTQzqt77v9j0~gF~vbeJRrczq6KNeIyXwZT~GK~Lf~qi4wM95eBzMG3moI5HEb268uf2MKQuKUD6wweZBgLLHTk6QZsDSs8nG7Nz7CiR-h5Iw79zDhEU19rKCbLW~hJ1zjAjS0~-knfUlYgUq6TKJUUkaU0x3gNR0JFYjAUFYU5mGq~tfgaFpijbiNjl5z4AC4OllIoyuSrVGxTQu6~FX2-Fuzr8K3235R65bN7rlrzduhg6fIoYkkdy4zWD2~fnmekMZ5soQX0Vk~S3eDEs8YmPn5A6xFzi~MiO53Xe2K6bBVVtGA-eY-urXUeeYJHhrTlxAmvlSIyA__" alt="Calculate Tax" className=" rounded-lg w-36 h-36 object-cover object-right" />
                        <div>
                            <h3 className="text-2xl font-semibold">Calculate your tax liability</h3>
                            <button className="mt-4 bg-white font-semibold text-black py-2 px-4 rounded-lg">Check Now →</button>
                        </div>
                    </div>
                </div>
            </section>
            <p className='text-gray-600 text-lg font-medium mt-4'>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
                semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames
                amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
        </div>
    );
};

export default CryptoInfo;
