import React from 'react';

const FindCity = () => {

    const getCity = async(e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9ef9d8b0f4ba402b937174728242706&q=${e.target[0].value}&days=7&aqi=yes&alerts=yes`);
        const data = await response.json();
        console.log(data);
    }

    const updateClock = () => {
        document.querySelector('.time').innerText = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}:${new Date().getSeconds().toString().padStart(2, '0')}`;
    }
    setInterval(updateClock, 1000);

    return (
        <div className="">
            <div className="px-3 sm:flex justify-center gap-3 max-w-screen-xl mx-auto">

                <form id="myForm" className="poppins flex-1 max-w-screen-xl bg-gray-800 p-5 rounded-xl my-3" onSubmit={getCity}>
                    <div className="flex justify-center gap-3 flex-col md:flex-row">
                        <input id="city" type="search"
                            name="city"
                            className="flex-1 text-black bg-neutral-100 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xm px-4 py-3 dark:focus:ring-blue-800"
                            placeholder="search your location" />

                            <button type="submit"
                                className="flex-1 sm:flex-none w-full md:w-40 lg:w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                    </div>

                    <p className="found hidden text-white mt-4 ms-1">Not found</p>
                </form>



                {/* <!-- current time country wise --> */}
                <div className="time poppins poppins max-w-screen-xl bg-gray-800 p-7 rounded-xl my-3 font-bold flex justify-center items-center text-white">00:00 PM</div>
            </div>
        </div>
    )
}

export default FindCity
