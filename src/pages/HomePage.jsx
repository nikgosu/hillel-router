import React from 'react'
import {Link} from "react-router-dom"

const HomePage = () => {
	return (
		<div className={'homepage'}>
			<h1>My projects</h1>
			<div className={'my-projects'}>
				<div className={'my-projects_project'}>
					<h2>Contacts book</h2>
					<p>Little contacts book</p>
					<Link to={'/contacts'}>go to project</Link>
				</div>
				<div className={'my-projects_project'}>
					<h2>Todo list</h2>
					<p>Little todo list</p>
					<Link to={'/todos'}>go to project</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage