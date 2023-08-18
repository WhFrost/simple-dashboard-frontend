import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {ClientsPage} from 'pages/ClientsPage';

export enum AppRoutes {
	MAIN = 'main',
	CLIENTS = 'clients',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.CLIENTS]: '/clients',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.CLIENTS]: {
		path: RoutePath.clients,
		element: <ClientsPage />,
	},
};
