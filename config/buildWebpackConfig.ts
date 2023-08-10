import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {BuildLoaders} from './buildLoaders';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	const {mode, paths, isDev} = options;

	const config: webpack.Configuration = {
		mode,
		entry: paths.entry,
		module: {
			rules: BuildLoaders(options),
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};

	return config;
}
