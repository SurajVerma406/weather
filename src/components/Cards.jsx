import React from 'react';

const Cards = ({ weatherData }) => {
    return (
        <div className='poppins'>
            <div className="grid grid-cols-3 gap-3 max-w-screen-xl mx-auto px-3">

                <div className="md:mr-20 mb-3 transition-all rounded-lg cursor-pointer flex flex-col justify-center items-center text-center p-6 bg-slate-800 w-full">
                    <div className="text-md font-bold flex flex-col text-white"><span className="uppercase">Today</span> <span className="font-normal text-white text-sm">{weatherData ? weatherData.location.localtime : '2000-01-01 18:13'}</span></div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img className='w-24' src={weatherData ? weatherData.current.condition.icon : 'http://cdn.weatherapi.com/weather/64x64/day/113.png'} alt="weatherIcon" />
                    </div>
                    <p className="text-white mb-2">{weatherData ? weatherData.current.condition.text : 'Party Cloudy'}</p>
                    <div className="text-3xl font-semibold text-white mb-6">{weatherData ? parseInt(weatherData.current.temp_c) : '0'}ºC<span className="font-normal text-white mx-1">/</span>{weatherData ? parseInt(weatherData.current.temp_f) : '0'}ºF</div>
                </div>

                <div className="md:mr-20 mb-3 transition-all rounded-lg cursor-pointer flex flex-col justify-center items-center text-center p-6 bg-slate-800 w-full">
                    <div className="text-md font-bold flex flex-col text-white"><span className="uppercase">Today</span> <span className="font-normal text-white text-sm">{weatherData ? weatherData.location.localtime : '2000-01-01 18:13'}</span></div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img className='w-24' src={weatherData ? weatherData.current.condition.icon : 'http://cdn.weatherapi.com/weather/64x64/day/113.png'} alt="weatherIcon" />
                    </div>
                    <p className="text-white mb-2">{weatherData ? weatherData.current.condition.text : 'Party Cloudy'}</p>
                    <div className="text-3xl font-semibold text-white mb-6">{weatherData ? parseInt(weatherData.current.temp_c) : '0'}ºC<span className="font-normal text-white mx-1">/</span>{weatherData ? parseInt(weatherData.current.temp_f) : '0'}ºF</div>
                </div>

                <div className="md:mr-20 mb-3 transition-all rounded-lg cursor-pointer flex flex-col justify-center items-center text-center p-6 bg-slate-800 w-full">
                    <div className="text-md font-bold flex flex-col text-white"><span className="uppercase">Today</span> <span className="font-normal text-white text-sm">{weatherData ? weatherData.location.localtime : '2000-01-01 18:13'}</span></div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img className='w-24' src={weatherData ? weatherData.current.condition.icon : 'http://cdn.weatherapi.com/weather/64x64/day/113.png'} alt="weatherIcon" />
                    </div>
                    <p className="text-white mb-2">{weatherData ? weatherData.current.condition.text : 'Party Cloudy'}</p>
                    <div className="text-3xl font-semibold text-white mb-6">{weatherData ? parseInt(weatherData.current.temp_c) : '0'}ºC<span className="font-normal text-white mx-1">/</span>{weatherData ? parseInt(weatherData.current.temp_f) : '0'}ºF</div>
                </div>

            </div>
        </div>
    )
}

export default Cards
