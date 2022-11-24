import React, { useRef } from "react"

function SearchBar({ setSearchCity }) {
	let inputRef = useRef()
	const handleClick = e => {
		e.preventDefault()

		let cityName = inputRef.current.value
		let arrayOfWords = cityName.split(" ")
		let value = ""

		for (let i = 0; i < arrayOfWords.length; i++) {
			value += arrayOfWords[i]
			if (value.indexOf(" ") === -1) {
				value += " "
			} else {
			}
		}

		// console.log(setSearchCity)
		console.log(value)
		setSearchCity(value)
		inputRef.current.value = ""
	}
	const handleKeyDown = e => {
		if (e.key === "Enter") {
			handleClick(e)
		}
	}
	return (
		<div className='w-fit rounded-xl flex items-center bg-white px-3 py-2'>
			<input
				type='text'
				ref={inputRef}
				className='search-bar placeholder:italic focus:outline-none'
				placeholder='Enter city name...'
				onKeyDown={handleKeyDown}

			/>
			<button className='ml-2' onClick={handleClick}>
				<svg viewBox='0 0 1024 1024' className='w-6 h-6'>
					<path
						className='path1'
						d='M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z'
					></path>
				</svg>
			</button>
		</div>
	)
}

export default SearchBar
