import {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {RouteConfig} from 'app/providers/Router/config/routerConfig';

function AppRouter() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Routes>
				{Object.values(RouteConfig).map(({element, path}) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
}

export default AppRouter;
