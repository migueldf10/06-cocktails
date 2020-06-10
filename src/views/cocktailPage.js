import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import IngredientsTable from '../components/ingredientsTable'

export default function CocktailTypePage() {
	const [cocktail, set_cocktail] = useState({})
	const { cocktailId } = useParams();

	const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`


	useEffect(() => {
		const getCocktailData = async () => {
			const response = await Axios.get(apiUrl)
			set_cocktail(response.data.drinks[0])
		}
		getCocktailData()
	}, [apiUrl])

	return (
		<div>
			<h1> This is the cocktail {cocktail.strDrink}'s page</h1>
			{cocktail.dateModified && (
				<span>Last edit: {cocktail.dateModified.split(' ')[0]}</span>
			)}

			<IngredientsTable cocktail={cocktail} />
			<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
		</div>
	)
}
