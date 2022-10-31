import {useQuery} from "@apollo/client";
import GET_ALL_ACTORS from "../constants/api/allActors";
import {useEffect, useState} from "react";
import {ICharacters} from "../pages/character/ICharacters";

const useHomepage = () => {
	let {data, loading, fetchMore} = useQuery(GET_ALL_ACTORS, {variables: {page: 1, filter: {}}})
	let [nextPBtn, setNextPBtn] = useState(1);
	let [allActors, setAllActors] = useState<ICharacters[]>([]);

	useEffect(() => {
		if (data) {
			setNextPBtn(data.characters.info.next)
			setAllActors(data.characters.results)
		}
	}, [data])

	const nextPageFun = async () => {
		await fetchMore({
			variables: {page: nextPBtn, filter: {}},
			updateQuery: (prevResult, {fetchMoreResult}) => {
				return fetchMoreResult;
			}
		})
	}

	const prevPageFun = async () => {
		await fetchMore({
			variables: {page: data.characters.info.prev, filter: {}},
			updateQuery: (prevResult, {fetchMoreResult}) => {
				return fetchMoreResult;
			}
		})
	}

	return {
		allActors,
		nextPageFun,
		prevPageFun,
		loading
	}
}

export default useHomepage
