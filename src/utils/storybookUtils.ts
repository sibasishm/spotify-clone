export const toEnum = <T>(options: T[]) => ({
	control: {
		type: 'inline-radio',
		options,
	},
});

export const toBoolean = () => ({
	control: {
		type: 'boolean',
	},
});

export const toStr = () => ({
	control: {
		type: 'text',
	},
});
