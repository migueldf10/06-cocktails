import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import CocktailGridItem from '../components/cocktailGridItem'

export default function CocktailTypePage() {
	const [cocktails, set_cocktails] = useState([])
	let { cocktailEncoded } = useParams();

	const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cocktailEncoded}`


	useEffect(() => {
		const getCocktailData = async () => {
			const response = await Axios.get(apiUrl)
			set_cocktails(response.data.drinks)

		}
		getCocktailData()
	}, [apiUrl])

	return (
		<div>
			<ul className='cocktail-grid'>
				{cocktails.map(cocktail =>
					<CocktailGridItem key={cocktail.idDrink} cocktail={cocktail} />
				)}
			</ul>
		</div>
	)
}
