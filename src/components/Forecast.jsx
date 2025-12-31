import React from 'react';

const Forecast = ({ foreCastDay }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="poppins w-full relative overflow-x-auto shadow-md max-w-screen-xl mx-3 xl:px-3 mb-3 overflow-hidden">

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md overflow-hidden">
                        <thead className="text-xs text-gray-700 normal-case bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3">Monday</th>
                                <th scope="col" className="px-6 py-3">Tuesday</th>
                                <th scope="col" className="px-6 py-3">Wednesday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Date</th>
                                <td className="px-6 py-4 date-1">{foreCastDay ? foreCastDay[0].date : '01 Jan'}</td>
                                <td className="px-6 py-4 date-2">{foreCastDay ? foreCastDay[1].date : '01 Jan'}</td>
                                <td className="px-6 py-4 date-3">{foreCastDay ? foreCastDay[2].date : '01 Jan'}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Low Temprature</th>
                                <td className="px-6 py-4 low-1">{foreCastDay ? parseInt(foreCastDay[0].day.mintemp_c) : '0'}ºC</td>
                                <td className="px-6 py-4 low-2">{foreCastDay ? parseInt(foreCastDay[1].day.mintemp_c) : '0'}ºC</td>
                                <td className="px-6 py-4 low-3">{foreCastDay ? parseInt(foreCastDay[2].day.mintemp_c) : '0'}ºC</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">High Temprature</th>
                                <td className="px-6 py-4 high-1">{foreCastDay ? parseInt(foreCastDay[0].day.maxtemp_c) : '0'}ºC</td>
                                <td className="px-6 py-4 high-2">{foreCastDay ? parseInt(foreCastDay[1].day.maxtemp_c) : '0'}ºC</td>
                                <td className="px-6 py-4 high-3">{foreCastDay ? parseInt(foreCastDay[2].day.maxtemp_c) : '0'}ºC</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Weather</th>
                                <td className="px-6 py-4 temp-in-text-1">{foreCastDay ? foreCastDay[0].day.condition.text : 'Party Cloudy'}</td>
                                <td className="px-6 py-4 temp-in-text-2">{foreCastDay ? foreCastDay[1].day.condition.text : 'Party Cloudy'}</td>
                                <td className="px-6 py-4 temp-in-text-3">{foreCastDay ? foreCastDay[2].day.condition.text : 'Party Cloudy'}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sunrise time</th>
                                <td className="px-6 py-4 sunrise-1">{foreCastDay ? foreCastDay[0].astro.sunrise : '00:00'}</td>
                                <td className="px-6 py-4 sunrise-2">{foreCastDay ? foreCastDay[1].astro.sunrise : '00:00'}</td>
                                <td className="px-6 py-4 sunrise-3">{foreCastDay ? foreCastDay[2].astro.sunrise : '00:00'}</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sunset time</th>
                                <td className="px-6 py-4 sunset-1">{foreCastDay ? foreCastDay[0].astro.sunset : '00:00'}</td>
                                <td className="px-6 py-4 sunset-2">{foreCastDay ? foreCastDay[1].astro.sunset : '00:00'}</td>
                                <td className="px-6 py-4 sunset-3">{foreCastDay ? foreCastDay[2].astro.sunset : '00:00'}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Forecast
