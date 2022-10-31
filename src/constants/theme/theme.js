import {createTheme} from "@mui/material";

const rickAndMortyTheme =  createTheme({
	palette: {
		ricky: {
			primary: '#ff3402',
		},
	},
	breakpoints: {
		values: {
			laptop: 1024,
			tablet: 640,
			mobile: 0,
			desktop: 1280,
		},
	},
})

export default rickAndMortyTheme;
