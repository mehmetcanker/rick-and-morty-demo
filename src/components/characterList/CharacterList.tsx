import Grid from '@mui/material/Unstable_Grid2';
import Character from '../character/Character';
import React from 'react';
import Loading from "../loading/Loading";
import {ICharacterList} from "./ICharacterList";

const CharacterList = (props: ICharacterList) => {
	const {allActors, loading} = props;

	return (loading ? <Loading/> :
			<Grid mt={1} container spacing={{mobile: 1, tablet: 2, laptop: 3}}>
				{allActors?.length > 0
					&& allActors.map((item,index) => {
						return <Character key={index} item={item}/>
					})}
			</Grid>
	)
}
export default CharacterList;
