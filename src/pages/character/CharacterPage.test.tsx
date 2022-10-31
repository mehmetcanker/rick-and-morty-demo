import React from 'react';
import {cleanup, render, waitFor} from '@testing-library/react';
import CharacterPage from './CharacterPage';
import {MockedProvider} from "@apollo/client/testing";
import GET_SINGLE_ACTOR from "../../constants/api/singleActor";
import singleCharacter from "../../mockData/singleCharacter";

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		id: 1,
	}),
}));

const mocks = [{
	request: {
		query: GET_SINGLE_ACTOR,
		variables: {
			id: 1
		},
	},
	result: {
		data: singleCharacter.data
	},
}
];

afterEach(cleanup);
describe('CharacterPage Component', () => {
	test('Given when if the Character Page rendered with id=1 component should show the character name as Test1', async () => {
		const component = render(
			<MockedProvider addTypename={false} mocks={mocks}>
				<CharacterPage/>
			</MockedProvider>
		);
		await waitFor(() => {
			expect(component.getByText('Rick Sanchez')).toBeInTheDocument();
			expect(component.getByText('Male')).toBeInTheDocument();
			expect(component.getByText('Alive')).toBeInTheDocument();
			expect(component.getByText('Citadel of Ricks')).toBeInTheDocument();
			expect(component.getByText('Earth (C-137)')).toBeInTheDocument();
		});
	});
});
