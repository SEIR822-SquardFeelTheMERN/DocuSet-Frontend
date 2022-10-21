import React from 'react';
import Header from './Header';
import SubjectSearch from './SubjectSearch';
import Nav from './Nav';

function Home({getActivity},  props) {
	return <div>


		<Header/>
		<Nav />
		<SubjectSearch getActivity={getActivity} title={props.title}/>
		


	</div>;
}

export default Home;