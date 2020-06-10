import React from 'react'
import { Link, useHistory } from 'react-router-dom'


export default function Header() {
	const history = useHistory();
	return (
		<div className='header'>
			<nav>
				<ul>
					<li>
						<Link to='/'>Search</Link>
					</li>
					<li>
						<button onClick={() => {
							history.goBack()
						}}>Back</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
