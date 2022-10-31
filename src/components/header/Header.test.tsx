
import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

const prevPageFun = jest.fn();
const nextPageFun = jest.fn();

afterEach(cleanup);
describe('Header Component', () => {

	test('Given when the Rick and Morty title should be in Header after render', () => {
		const component = render(
			<Header prevPageFun={prevPageFun} nextPageFun={nextPageFun}/>,
		);
		expect(component.getByText('Rick and Morty')).toBeInTheDocument();
	});

	test('Given when if the button that has test-id=next-btn click the nextPageFun func should be called', () => {
		 render(
			<Header prevPageFun={prevPageFun} nextPageFun={nextPageFun}/>,
		);
		fireEvent.click(screen.getByTestId('next-btn'));
		expect(nextPageFun).toHaveBeenCalledTimes(1);
	});

	test('Given when if the button that has test-id=prev-btn click the prevPageFun func should be called', () => {
		 render(
			<Header prevPageFun={prevPageFun} nextPageFun={nextPageFun}/>,
		);
		fireEvent.click(screen.getByTestId('prev-btn'));
		expect(prevPageFun).toHaveBeenCalledTimes(1);
	});
});
