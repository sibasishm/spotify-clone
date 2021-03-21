import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './button';

describe('Button', () => {
	it('should match snapshot', () => {
		const { container, getByText } = render(<Button>Click Me</Button>);
		expect(getByText('Click Me')).toBeInTheDocument();
		expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="flex items-center justify-center font-bold py-2 px-6 text-sm rounded-lg text-white bg-primary hover:bg-primary-offset disabled:bg-disabled disabled:text-dark-offset"
    >
      Click Me
    </button>
    `);
	});
});
