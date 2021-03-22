import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
} from 'react';

import { variants, sizes, colors, generateClassName } from './variations';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	size?: keyof typeof sizes;
	color?: typeof colors[number];
	variant?: typeof variants[number];
	/**
	 * If added, the button will show an icon before the button's label.
	 */
	icon?: ReactNode;
}

export const Button = ({
	children,
	size = 'big',
	color = 'primary',
	variant = 'solid',
	icon,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={`flex items-center justify-center font-bold ${
				sizes[size]
			} ${generateClassName(variant, color)} disabled:text-dark-offset`}
			{...props}
		>
			{icon ? <span className='mr-2'>{icon}</span> : null}
			{children}
		</button>
	);
};
