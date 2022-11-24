import React, { useState, useEffect } from "react"
import "./Forecast.css"
import WeatherDetail from "./WeatherDetail/WeatherDetail"
import SearchBar from "../SearchBar/SearchBar"
function Forecast() {
	const [data, setData] = useState({})

	const [city, setCity] = useState("Toronto")
	// const [cityError, setCityError] = useState("")
	const API_KEY = "5c6544b20592f1299912bf56d6212d00"

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		fetch(URL, { signal: signal })
			.then(result => result.json())
			.then(data => {
				const date = new Date()
				data["date"] = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
				setData(data)
				// console.log(data)
			})
			.catch(err => {
				console.log(err)
			})
		return () => {
			// setData({})
			controller.abort()
		}
	}, [city])
	if (data.main === undefined) {
		return <h1>Loading...</h1>
	} else {
		return (
			<div className='forecast-container flex justify-center items-center border-4 h-screen'>
				<div className='weather relative w-10/12 h-5/6 rounded-2xl'>
					<div className='weather-detail absolute right-0 w-1/3 h-full'>
						<div className='weather-detail layer bg-slate-500 opacity-50 h-full w-full absolute rounded-tr-2xl rounded-br-2xl'></div>
						<div className='relative p-8 h-full'>
							<h1 className='text-white'>Weather Details</h1>
							<WeatherDetail data={data} />
						</div>
					</div>

					<div className='weather-general flex flex-col justify-between h-full pl-8 py-8'>
						<div className='name text-white text-lg cursor-pointer'>ndh.weather</div>

						<SearchBar setSearchCity={setCity} />
						{/* <p className='italic text-red-800'>{cityError}</p> */}

						<div className='weather-general-information basis-4/6 flex'>
							<div className='basis-3/5 flex items-center'>
								<div className='main-temperature pr-8 font-bold text-white text-7xl h-fit'>
									{data.main.temp}&#8451;
								</div>
								<div className='main-city flex flex-col pr-8 justify-between text-white'>
									<p className='text-3xl font-semibold'>{data.name}</p>
									<p className='text-lg'>{data.date}</p>
								</div>
								<div className='main-description flex flex-col text-center text-white font-semibold text-xl'>
									<img
										style={{ width: "auto", height: "35px" }}
										src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
										alt='weather icon'
									/>

									<p className=''>{data.weather[0].main}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Forecast
