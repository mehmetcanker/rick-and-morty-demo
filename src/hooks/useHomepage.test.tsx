import React from 'react';
import {cleanup, renderHook, waitFor} from '@testing-library/react';
import characterList from "../mockData/characterList";
import GET_ALL_ACTORS from "../constants/api/allActors";
import useHomepage from "./useHomepage";
import {MockedProvider} from "@apollo/client/testing";

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom')
}));

const mocks = [{
	request: {
		query: GET_ALL_ACTORS,
		variables: {
			page: 1,
			filter: {}
		},
	},
	result: {
		data: characterList.data
	},
}];

afterEach(cleanup);
describe('useHomepage Hook', () => {
	test('Given when the useHomepage hook call test for first character', async () => {
		// @ts-ignore
		const wrapper = ({children}) => (
			<MockedProvider mocks={mocks} addTypename={false}>
				{children}
			</MockedProvider>
		);
		const { result } = renderHook(() => useHomepage(), {
			wrapper
		});

		await waitFor(() => {
			expect(result.current.allActors[0].name).toBe('Rick Sanchez');
			expect(result.current.allActors[0].gender).toBe('Male');
			expect(result.current.allActors[0].id).toBe('1');
		});
	});
});
