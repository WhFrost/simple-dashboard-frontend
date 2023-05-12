import WebpackDevServer from 'webpack-dev-server';
import {BuildOptions} from './types/config';

export function buildDevServer({
	port,
}: BuildOptions): WebpackDevServer.Configuration {
	return {
		port,
		open: true,
		historyApiFallback: true,
	};
}
