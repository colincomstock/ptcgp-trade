import { React, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemonCards from './pokemon_cards.json'

function App() {

	const [searchText, setSearchText] = useState('');

	for (let i = 0; i < pokemonCards.length; i++) {
		let pokemonCard = pokemonCards[i];
		console.log(pokemonCard);
		console.log(pokemonCard.name);
		console.log(pokemonCard.image_path);
	}

	function handleChange(event) {
		const { value } = event.target;
		setSearchText(value);
		if (value.length > 0) {
			console.log('Searching for:', value);
		}
  	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('Form submitted');
	}

	return (
		<>
			<header>
				<div className='header-logo'>
					<h1>GTS</h1>
					<span>Pocket</span>
				</div>
				<div className="rainbow-divider"></div>
			</header>
			<main>
				<div className='search-box'>
					<form onSubmit={handleSubmit} className='main-search'>
						<input 
							type="text" 
							placeholder="Search for trades..." 
							onChange={handleChange} 
							value={searchText}
							className='main-search'
						/>
					</form>
				</div>
				<div className='cards-container'>
					{pokemonCards.filter((pokemonCard) =>
						searchText.length === 0 || 
						pokemonCard.name.toLowerCase().includes(searchText.toLowerCase())
					  )
					.map((pokemonCard, index) => (
						<div key={index} className='card'>
							<img src={`./images/${pokemonCard.image_path}`} alt={pokemonCard.name} />

						</div>
					))}
				</div>
				
			</main>
		</>
	)
};

export default App
