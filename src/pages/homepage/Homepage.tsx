import React from 'react';
import Header from "../../components/header/Header";
import CharacterList from "../../components/characterList/CharacterList";
import useHomepage from "../../hooks/useHomepage";

function Homepage() {
	const {allActors, loading, nextPageFun, prevPageFun} = useHomepage();
	return (
		<>
			<Header nextPageFun={nextPageFun} prevPageFun={prevPageFun}/>
			<CharacterList allActors={allActors} loading={loading}/>
		</>
	);
}

export default Homepage;
