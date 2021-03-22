const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: [
		'../src/components/**/*.story.mdx',
		'../src/components/**/*.story.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	webpackFinal: async (config) => {
		config.resolve.plugins.push(new TsconfigPathsPlugin({}));
		return config;
	},
};
