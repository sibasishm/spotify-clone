import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	children: React.ReactNode;
	classes?: string;
	/**
	 * Test
	 */
	variant: 'filled' | 'outlined';
}

export const Button = ({
	variant = 'filled',
	onClick,
	classes,
	children,
	...rest
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={[
				classes,
				'rounded-sm px-4 py-2',
				`${variant === 'filled' ? 'bg-blue-400' : 'border-2 border-blue-400'}`,
			].join(' ')}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};
