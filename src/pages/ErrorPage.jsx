import React from 'react'
import {Link} from "react-router-dom"

const ErrorPage = () => {
	return (
		<div className={'error-page'}>
			<h2>Oooops page NOT FOUND</h2>
			<p><Link to={'/homepage'}>Go to homepage</Link></p>
		</div>
	)
}

export default ErrorPage