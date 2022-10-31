import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from "react-router";

const mockData = {
	loading: false,
	allActors: [
		{
			id: "1",
			key: 1,
			name: "test1",
			image: "testimg1",
		},
		{
			id: "2",
			key: 2,
			name: "test2",
			image: "testimg2",
		}
	]
}

const mockDataForLoading = {
	loading: true,
	allActors:[],
}

afterEach(cleanup);
describe('CharacterList Component', () => {

	test('Given when the CharacterList component ready mockData names should be rendered on the screen',
		() => {
		const component = render(
			<MemoryRouter>
		<CharacterList allActors={mockData.allActors} loading={mockDataForLoading.loading}/>
			</MemoryRouter>,
		);
		expect(component.getByText('test1')).toBeInTheDocument();
		expect(component.getByText('test2')).toBeInTheDocument();
	});

	test('Given when the Loading component visible if the CharacterList calling with mockDataForLoading props',
		() => {
		const component = render(
			<MemoryRouter>
				<CharacterList allActors={mockDataForLoading.allActors} loading={mockDataForLoading.loading}/>
			</MemoryRouter>,
		);
		expect(component.getByTestId('loading-box')).toBeInTheDocument();
	});
});
