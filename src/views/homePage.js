import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {
	Link,
	useHistory
} from "react-router-dom";
// Better use encodeURIComponent to remove / from results

export default function HomePage() {
	const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

	const [searchTerm, set_searchTerm] = useState('')
	const [cocktailTypes, set_cocktailTypes] = useState([])

	let history = useHistory();


	const updateInput = (event) => {
		// console.log(event.target.value)
		set_searchTerm(event.target.value)
	}
	const performSearch = () => {
		history.push(`/search/${searchTerm}`);

	}

	useEffect(() => {

		const getCocktailTypes = async () => {
			const data = await Axios.get(apiUrl)
			console.log(data)
			set_cocktailTypes(data.data.drinks)
		}

		getCocktailTypes()
	}, [])


	return (
		<div>
			<h2>Search your next cocktail</h2>
			<input placeholder='search here' onChange={updateInput} />
			<button onClick={performSearch}>Search</button>
			<h2>You can browse by type of cocktail</h2>
			<ul>

				{cocktailTypes && cocktailTypes.map((cocktailType, index) =>
					<li key={index} >
						<Link to={'/types/' + encodeURIComponent(cocktailType.strCategory)}>
							{cocktailType.strCategory}
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}
