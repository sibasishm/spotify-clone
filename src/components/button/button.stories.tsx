import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from './button';
import { variants, sizes, colors } from './variations';
import { toEnum, toBoolean } from 'utils/storybookUtils';
import { Clipboard } from 'icons/clipboard';

export default {
	title: 'Elements/Button',
	component: Button,
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

export const Default = ButtonComponent.bind({});

Default.argTypes = {
	size: toEnum(Object.keys(sizes)),
	color: toEnum(colors),
	variant: toEnum(variants),
	exampleIcon: toBoolean(),
};
