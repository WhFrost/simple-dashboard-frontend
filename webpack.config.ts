import path from 'path';
import webpack from 'webpack';
import {BuildEnv, BuildOptions, BuildPaths} from './config/types/config';
import {buildWebpackConfig} from './config/buildWebpackConfig';

export default (env: BuildEnv) => {
	const mode = env.mode || 'development';

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const isDev = mode === 'development';

	const port = env.port || 3000;

	const options: BuildOptions = {
		mode,
		paths,
		isDev,
		port,
	};

	const config: webpack.Configuration = buildWebpackConfig(options);

	return config;
};
