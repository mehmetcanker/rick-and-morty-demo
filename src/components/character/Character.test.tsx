
import React from 'react';
import {cleanup, render, screen, waitFor} from '@testing-library/react';
import Character from './Character';
import { ICharacter} from "./ICharacter";
import { MemoryRouter } from "react-router";

jest.mock('react-router-dom', () => {
	const originalModule = jest.requireActual('react-router-dom');
	return {
		__esModule: true,
		...originalModule
	};
});

const characterMock: ICharacter = {
	id: '1',
	key: 1,
	name: "Mehmet Canker",
	image: "http://testimage.com.qq"
}

afterEach(cleanup);
describe('Character Component', () => {

	test('Given when the mock object details should be rendered when the component rendered', async () => {
		const component = render(
			<MemoryRouter>
				<Character item={characterMock}/>
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(component.getByText('Mehmet Canker')).toBeInTheDocument();

			expect(screen.getByTestId(`img-${characterMock.id}`)
				.getAttribute('src')).toBe('http://testimage.com.qq')

			expect(screen.getByTestId(`link-${characterMock.id}`)
				.getAttribute('href')).toBe(`/character/${characterMock.id}`)
		});
	});
});
