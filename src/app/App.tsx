import {Suspense} from 'react';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {MainPage} from '../pages/MainPage';
import {ClientsPage} from '../pages/ClientsPage';

export default function App() {
	return (
		<>
			<div>
				<Link to={'/'}>Main</Link>
				<Link to={'/clients'}>Clients</Link>
			</div>

			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/clients'} element={<ClientsPage />} />
				</Routes>
			</Suspense>
		</>
	);
}
