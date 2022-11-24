import React from "react"

function WeatherDetail({ data }) {
	const style = "text-gray-600 hover:text-white hover:cursor-pointer"
	const KM_PER_HOUR_RATE = 3.6
	const MILLISECOND = 1000
	let sunrise = new Date(data.sys.sunrise * MILLISECOND).toLocaleTimeString()
	let sunset = new Date(data.sys.sunset * MILLISECOND).toLocaleTimeString()
	return (
		<div className='w-full h-5/6 flex flex-col justify-evenly'>
			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Feels like: </span>
				<span>{data.main.feels_like}&#8451;</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Min Temperature: </span>
				<span>{data.main.temp_min}&#8451;</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Max Temperature: </span>
				<span>{data.main.temp_max}&#8451;</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Pressure: </span>
				<span>{data.main.pressure}hPa</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Humidity: </span>
				<span>{data.main.humidity}%</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Wind speed: </span>
				<span>{(data.wind.speed * KM_PER_HOUR_RATE).toFixed(1)}km/h</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Sunrise: </span>
				<span>{sunrise}</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Sunset: </span>
				<span>{sunset}</span>
			</div>

			<div className={`${style} w-full flex justify-between px-4`}>
				<span className=''>Visibility: </span>
				<span>{data.visibility}km</span>
			</div>
		</div>
	)
}

export default WeatherDetail
