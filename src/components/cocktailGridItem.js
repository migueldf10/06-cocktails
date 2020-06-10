import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailGridItem(props) {
	const { cocktail } = props
	return (
		<li className='cocktail-grid-item'>
			<Link to={'/cocktails/' + encodeURIComponent(cocktail.idDrink)} >
				<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
				<h3>

					{cocktail.strDrink}
				</h3>
			</Link>
		</li>
	)
}
