import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useParams} from "react-router";
import {useQuery} from '@apollo/client';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import GET_SINGLE_ACTOR from "../../constants/api/singleActor";
import colors from '../../constants/theme/colors';
import Loading from "../../components/loading/Loading";

const useStyles = makeStyles(() => ({
	characterContainer: {
		justifyContent: 'center',
		color: colors.white
	},
	box: {
		backgroundColor: colors.primary,
		borderRadius: '0.5rem'
	},
	listBox: {
		'& span': {
			fontSize: '1.1rem'
		}
	},
	imgContainer: {
		borderRadius: '50%', overflow: 'hidden'
	}
}));

function CharacterPage() {
	let { id  } = useParams()
	const classes = useStyles();
	let {data, loading} = useQuery(GET_SINGLE_ACTOR, {variables: {id: id || 1}})

	return (
		<>
			<Grid className={classes.characterContainer} mt={10} container
				  spacing={{mobile: 1, tablet: 2, laptop: 3}}>
				{loading ? <Loading/> :
					<Grid className={classes.box} mobile={6}>
						<h2>Character Details</h2>
						<Box className={classes.imgContainer}>
							<img width={'100%'} src={data?.character?.image}
								 alt={data?.character?.name}/>
						</Box>
						<List className={classes.listBox} dense={true}>
							<ListItem>
								<ListItemText>
									<strong>Name:</strong> {data?.character?.name}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<strong>Status:</strong> {data?.character?.status}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<strong>Gender:</strong> {data?.character?.gender}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<strong>Species:</strong> {data?.character?.species}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<strong>Location:</strong> {data?.character?.location?.name}
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<strong>Originally From:</strong> {data?.character?.origin?.name}
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				}
			</Grid>
		</>
	)
}

export default CharacterPage;
