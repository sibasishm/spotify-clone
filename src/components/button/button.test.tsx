import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './button';

describe('Button', () => {
	it('should render the default button component', () => {
		const { container, getByText } = render(
			<Button size='small' variant='outline' color='secondary'>
				Click Me
			</Button>
		);
		expect(getByText('Click Me')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="flex items-center justify-center font-bold py-1 px-2 text-xs rounded-md border-2 text-secondary border-secondary hover:border-secondary-offset disabled:border-disabled disabled:text-dark-offset"
    >
      Click Me
    </button>
    `);
	});

	it('should render an icon if icon prop is provided', () => {
		const { getByText } = render(
			<Button icon={<span>Fake Icon</span>}>Click Me</Button>
		);
		expect(getByText('Fake Icon')).toBeInTheDocument();
	});
});
