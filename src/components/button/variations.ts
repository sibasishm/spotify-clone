export const sizes = {
	big: 'py-2 px-6 text-sm rounded-lg',
	small: 'py-1 px-2 text-xs rounded-md',
};

export const colors = ['primary', 'secondary'];

export const variants = ['solid', 'outline'];

type ColorClass = { primary: string; secondary: string };

const solidColor: ColorClass = {
	primary: 'bg-primary hover:bg-primary-offset',
	secondary: 'bg-secondary hover:bg-secondary-offset',
};

const outlineColor: ColorClass = {
	primary: 'text-primary border-primary hover:border-primary-offset',
	secondary: 'text-secondary border-secondary hover:border-secondary-offset',
};

export const generateClassName = (
	varaint: typeof variants[number],
	color: typeof colors[number]
): string =>
	`${
		varaint === 'solid'
			? `text-white ${solidColor[color]} disabled:bg-disabled`
			: `border-2 ${outlineColor[color]} disabled:border-disabled`
	}`;
