import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import CocktailGridItem from '../components/cocktailGridItem'


export default function SearchResultsPage() {
	const [searchResults, set_searchResults] = useState([])
	const { searchQuery } = useParams()

	const fetchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await Axios.get(fetchUrl)
			set_searchResults(response.data.drinks)
		}
		fetchPosts()
	}, [fetchUrl])
	return (
		<div>

			{searchResults && searchResults.length > 1 ?
				<div>
					<h2>Here are your cocktails!</h2>
					<ul className='cocktail-grid'>
						{searchResults.map((cocktail, index) =>
							<CocktailGridItem key={index} cocktail={cocktail} />
						)}}
					</ul>
				</div> :
				<h2>Sorry, but your search didnt show anything <Link to='/'>Try again</Link></h2>
			}
		</div>
	)
}
