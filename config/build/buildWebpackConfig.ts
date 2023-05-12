import webpack from 'webpack';
import {BuildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {BuildOptions} from './types/config';
import {buildPlugins} from './buildPlugins';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	const {mode, paths, isDev} = options;

	return {
		mode,
		entry: paths.entry,
		plugins: buildPlugins(options),
		module: {
			rules: BuildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
