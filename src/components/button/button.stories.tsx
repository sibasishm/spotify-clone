import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from './button';
import { variants, sizes, colors } from './variations';
import { toEnum, toBoolean } from 'utils/storybookUtils';
import { Clipboard } from 'icons/clipboard';

export default {
	title: 'Atoms/Button',
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

const ButtonComponent: Story<ButtonProps & { exampleIcon?: boolean }> = ({
	exampleIcon,
	children,
	...props
}) => (
	<Button {...props} icon={exampleIcon ? <Clipboard /> : null}>
		{children || 'Hello World'}
	</Button>
);

export const Main = ButtonComponent.bind({});

Main.argTypes = {
	size: toEnum(Object.keys(sizes)),
	color: toEnum(colors),
	variant: toEnum(variants),
	exampleIcon: toBoolean(),
};
