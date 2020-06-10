import React from 'react'

export default function IngredientsTable(props) {
	// map the keys
	// filter Ingredients and measures
	// return a table with values with content

	const { cocktail } = props

	const ingredientKeys = Object.keys(cocktail).filter(key => key.includes('Ingredient')) // returns array

	const measureKeys = Object.keys(cocktail).filter(key => key.includes('Measure')) // returns array




	const tableBody = () => measureKeys.map((measureKey, index) => {
		if (cocktail[measureKey]) {
			return (
				<tbody key={measureKey}>
					<tr>
						<td>Step {index + 1}</td>
						<td>{cocktail[ingredientKeys[index]]}</td>
						<td>{cocktail[measureKey]}</td>
					</tr>
				</tbody>
			)
		}
		return null
	})

	return (

		<table>
			<thead>
				<tr>
					<th>

					</th>
					<th>
						Ingredient
					</th>
					<th>
						Measure
					</th>
				</tr>
			</thead>
			{tableBody()}

		</table>
	)

}