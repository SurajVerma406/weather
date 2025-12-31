import React from 'react';

const Temp = ({ weatherData }) => {

    const todayDate = (today) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${days[today.getDay()]}, ${weatherData.current.last_updated.split(' ')[1]}`;
    }

    const celsius = () => {
        document.getElementById('fahrenheit').style.color = 'rgb(156 163 175)';
        document.getElementById('celsius').style.color = '#fff';
        document.getElementById('temp').innerHTML = weatherData ? parseInt(weatherData.current.temp_c) : '0';
    }
    const fahrenheit = () => {
        document.getElementById('celsius').style.color = 'rgb(156 163 175)';
        document.getElementById('fahrenheit').style.color = '#fff';
        document.getElementById('temp').innerHTML = weatherData ? parseInt(weatherData.current.temp_f) : '0';
    }

    return (
        <>
            <div className='poppins'>
                <div className="grid grid-cols-1 max-w-screen-xl mx-auto px-3 text-white">
                    <div className="grid gap-10 md:gap-0 grid-cols-1 sm:grid-cols-2 bg-slate-800 p-6 mb-3 transition-all rounded-lg cursor-pointer">
                        <div className="flex order-2 sm:order-1 items-end sm:items-start flex-col lg:flex-row gap-5 lg:gap-2 w-full py-1">
                            <div className="flex items-center gap-3">
                                <i className="text-7xl fa-solid fa-wind"></i>
                                <h1 id='temp' className="text-7xl">{weatherData ? parseInt(weatherData.current.temp_c) : '0'}</h1>
                            </div>
                            <div className="flex gap-2">
                                <h2 id='celsius' onClick={celsius} className="text-3xl border-e border-gray-400 h-fit pe-2">°C</h2>
                                <h2 id='fahrenheit' onClick={fahrenheit} className="text-3xl text-gray-400">°F</h2>
                            </div>
                            <div className="ps-2">
                                <h2 className="text-[20px] text-gray-400">Feelslike: {weatherData ? parseInt(weatherData.current.feelslike_c) : '0'}</h2>
                                <h2 className="text-[20px] text-gray-400">Clouds in Sky: {weatherData ? weatherData.current.cloud : '0'}</h2>
                                <h2 className="text-[20px] text-gray-400">Humidity:  {weatherData ? parseInt(weatherData.current.humidity) : '0'}</h2>
                                <h2 className="text-[20px] text-gray-400">Wind:  {weatherData ? parseInt(weatherData.current.wind_kph) : '0'} km/h</h2>
                            </div>
                        </div>
                        <div className="sm:text-end order-1 sm:order-2">
                            <h1 className="text-5xl">Weather</h1>
                            {/* <h1 className="text-2xl text-gray-400">Monday, 9:00 pm</h1> */}
                            <h1 className="text-2xl text-gray-400"> {weatherData ? weatherData ? todayDate(new Date(weatherData.location.localtime.split(' ')[0])) : null : 'Sunday, 12:00'}</h1>
                            <h1 className="text-2xl text-gray-400">{weatherData ? weatherData.current.condition.text : 'Haze'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Temp
