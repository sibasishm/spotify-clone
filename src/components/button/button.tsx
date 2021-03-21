import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
} from 'react';

const sizes = {
	big: 'py-2 px-6 text-sm rounded-lg',
	small: 'py-1 px-2 text-xs rounded-md',
};

const variants = {
	'primary-filled':
		'text-white bg-primary hover:bg-primary-offset disabled:bg-disabled',
	'primary-outlined':
		'border-2 text-dark border-primary hover:border-primary-offset disabled:border-disabled',
	'secondary-filled':
		'text-white bg-secondary hover:bg-secondary-offset disabled:bg-disabled',
	'secondary-outlined':
		'border-2 text-dark border-secondary hover:border-secondary-offset disabled:border-disabled',
};

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	size?: keyof typeof sizes;
	variant?: keyof typeof variants;
	icon?: ReactNode;
};

export const Button = ({
	children,
	size = 'big',
	variant = 'primary-filled',
	...rest
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={`font-bold ${sizes[size]} ${variants[variant]} disabled:text-dark-offset`}
			{...rest}
		>
			{children}
		</button>
	);
};
