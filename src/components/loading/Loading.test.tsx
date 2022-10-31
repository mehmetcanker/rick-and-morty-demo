
import React from 'react';
import {render, cleanup, screen, fireEvent, waitFor} from '@testing-library/react';
import Loading from './Loading';

afterEach(cleanup);
describe('Loading Component', () => {

	test('Given when the Loading component visible if the Loading calling with visible=true props', () => {
		render(
			<Loading visible={true}/>,
		);
		expect(screen.getByTestId('loading-box')).toBeInTheDocument();
	});

	test('Given when the Loading component visible if the Loading calling with no props', () => {
		render(
			<Loading/>,
		);
		expect(screen.getByTestId('loading-box')).toBeInTheDocument();
	});
});
