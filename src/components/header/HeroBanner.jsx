import React from 'react';
import bookhero from '../../assets/bookhero.png';
const HeroBanner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[554px] rounded-2xl mb-10">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="max-w-3/6">
                        <img
                            src={bookhero}
                            className="max-h-[400px] rounded-lg"
                        />
                    </div>
                    <div className='space-y-12 max-w-3/6'>
                        <h1 className="text-6xl font-extrabold playfair">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white p-8 rounded-xl text-xl">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;