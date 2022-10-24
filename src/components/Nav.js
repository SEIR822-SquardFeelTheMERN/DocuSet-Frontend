import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<div className='navDiv'>
			<Link to="/"><h3>Home</h3></Link>
			<Link to='/MySheets'>
				<h3>My Sheets</h3>
			</Link>
			<Link to='/create'>
				<h3>Create Sheet</h3>
			</Link>
		</div>
	);
}

export default Nav;
