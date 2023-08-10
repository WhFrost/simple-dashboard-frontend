import webpack from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function BuildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const {isDev} = options;

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// 'css-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module./,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
					sourceMap: true,
				},
			},
			'sass-loader',
		],
	};
	return [tsLoader, styleLoader];
}
