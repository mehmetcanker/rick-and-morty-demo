import React from 'react';
import {Container, ThemeProvider} from "@mui/material";
import Homepage from "./homepage/Homepage";
import CharacterPage from "./character/CharacterPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import rickAndMortyTheme from "../constants/theme/theme";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CONSTANTS from "../constants/common";

let client = new ApolloClient({
	uri: CONSTANTS.api,
	cache: new InMemoryCache()
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Container>
					<ThemeProvider theme={rickAndMortyTheme}>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<Homepage/>}/>
								<Route path="/character/:id" element={<CharacterPage/>}/>
							</Routes>
						</BrowserRouter>
					</ThemeProvider>
				</Container>
			</ApolloProvider>
		</>
	);
}

export default App;
