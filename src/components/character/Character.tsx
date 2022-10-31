import Grid from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import React from "react";
import {makeStyles} from "@mui/styles";
import colors from "../../constants/theme/colors";

const useStyles = makeStyles(() => ({
	box: {
		'&:hover': {
			backgroundColor: colors.primary
		},
		'&:hover a': {
			color: colors.white
		}
	},
	link: {
		color: colors.black,
		textDecoration: 'none',
		fontWeight: 'bold',
		lineHeight: '2rem'
	},
}));

const Character = (props: any) => {
	const { item } = props;
	const classes = useStyles();
	return <Grid className={classes.box} mobile={4}>
		<Link data-testid={`link-${item?.id}`} className={classes.link} to={`/character/${item?.id}`}>
			<img data-testid={`img-${item?.id}`} width={'100%'} src={item?.image} alt={item?.name}/>
			{item?.name}
		</Link>
	</Grid>
}

export default Character;
