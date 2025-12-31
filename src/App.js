import './App.css';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Temp from './components/Temp';
import Forecast from './components/Forecast';
import Footer from './components/Footer';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [foreCastDay, setForeCastDay] = useState(null);
    const [location, setLocaion] = useState(null);
    const [found, setFound] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    // Update the clock every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            setCurrentTime(timeString);
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const getCity = async (e) => {
        e.preventDefault();
        const city = e.target[0].value;

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_SECRET_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`);
        const data = await response.json();

        if (data.error) {
            setFound(true);
            return;
        }

        setFound(false);
        setWeatherData(data);
        setForeCastDay(data.forecast.forecastday);
        setLocaion(data.location);
    };

    return (
        <>
            <div className="bg-neutral-900">
                <Navbar location={location} />

                <div className="">
                    <div className="px-3 sm:flex justify-center gap-3 max-w-screen-xl mx-auto">
                        <form
                            id="myForm"
                            className="poppins flex-1 max-w-screen-xl bg-gray-800 p-5 rounded-xl my-3"
                            onSubmit={getCity}
                        >
                            <div className="flex justify-center gap-3 flex-col md:flex-row">
                                <input
                                    id="city"
                                    type="search"
                                    name="city"
                                    className="flex-1 text-black bg-neutral-100 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xm px-4 py-3 dark:focus:ring-blue-800"
                                    placeholder="search your location"
                                />

                                <button
                                    type="submit"
                                    className="flex-1 sm:flex-none w-full md:w-40 lg:w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>

                            {found && (
                                <p className="found text-white mt-4 ms-1">
                                    No matching location found
                                </p>
                            )}
                        </form>

                        {/* Current time */}
                        <div className="time poppins poppins max-w-screen-xl bg-gray-800 p-7 rounded-xl my-3 font-bold flex justify-center items-center text-white">
                            {currentTime}
                        </div>
                    </div>
                </div>

                <Temp weatherData={weatherData} />
                <Forecast foreCastDay={foreCastDay} />
                <Footer />
            </div>
        </>
    );
};

export default App;
