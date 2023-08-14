import webpack, {ProgressPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildPlugins(
	options: BuildOptions,
): webpack.WebpackPluginInstance[] {
	const {paths} = options;
	return [
		new ProgressPlugin(),
		new HtmlWebpackPlugin({template: paths.html}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	];
}
