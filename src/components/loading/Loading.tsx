import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {makeStyles} from "@mui/styles";
import {ILoading} from "./ILoading";

const useStyles = makeStyles(() => ({
	loading: {
		paddingTop: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

const Loading = (props: ILoading) => {
	const { visible = true } = props;
	const classes = useStyles()

	if(!visible){
		return null;
	}

	return <Box data-testid={'loading-box'} className={classes.loading}>
		<CircularProgress color="primary"/>
	</Box>
}

export default Loading;
