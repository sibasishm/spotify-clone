import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from 'pages';

describe('Home page', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<Home />, {});
		expect(asFragment()).toMatchSnapshot();
	});

	it('clicking button triggers alert', () => {
		const { getByText } = render(<Home />, {});
		window.alert = jest.fn();
		fireEvent.click(getByText(/Click/u));
		expect(window.alert).toHaveBeenCalledWith('TypeScript is coool!');
	});
});
