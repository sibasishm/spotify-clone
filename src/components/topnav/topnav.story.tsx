import React from 'react';
import { Story } from '@storybook/react';

import { TopNav } from './topnav';

export default {
	title: 'Navigation/Top Nav',
	component: TopNav,
};

const TopNavComponent = ({ ...props }) => <TopNav {...props} />;

export const Default = TopNavComponent.bind({});
