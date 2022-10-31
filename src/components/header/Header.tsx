import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@mui/styles";
import colors from "../../constants/theme/colors";
import {Button} from "@mui/material";
import {IHeaderAction} from "./IHeaderAction";

const useStyles = makeStyles(() => ({
	containerBox: {
		flexGrow: 1
	},
	toolbar: {
		backgroundColor: colors.toolbar,
		display: "flex",
		justifyContent: "space-between"
	},
	nextButton: {
		marginLeft: '2rem'
	}
}));

export default function Header(props: IHeaderAction) {
	const {prevPageFun, nextPageFun} = props;
	const classes = useStyles();
	return (
		<Box className={classes.containerBox}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6">
						Rick and Morty
					</Typography>
					<div>
						<Button data-testid={'prev-btn'} onClick={prevPageFun} variant="contained"
								color="success">Prev</Button>
						<Button data-testid={'next-btn'} onClick={nextPageFun} variant="contained"
								className={classes.nextButton} color="success">Next</Button>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
