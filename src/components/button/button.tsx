import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
} from 'react';

import { variants, sizes, colors } from './variations';

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	size?: keyof typeof sizes;
	color?: keyof typeof colors;
	variant?: keyof typeof variants;
	icon?: ReactNode;
};

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
			className={`flex items-center justify-center font-bold ${sizes[size]} ${variants[variant]} ${colors[color]} disabled:text-dark-offset`}
			{...props}
		>
			{icon ? <span className='mr-2'>{icon}</span> : null}
			{children}
		</button>
	);
};
