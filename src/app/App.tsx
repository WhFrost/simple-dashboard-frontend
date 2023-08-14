import {Suspense} from 'react';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import {MainPage} from '../pages/MainPage';
import {ClientsPage} from '../pages/ClientsPage';
import './ui/styles/global.scss';
import {useTheme} from '../shared/lib/useTheme';

export default function App() {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={`app ${theme}`}>
			<div>
				<Link to={'/'}>Main</Link>
				<Link to={'/clients'}>Clients</Link>
			</div>
			<button onClick={toggleTheme}>{theme}</button>

			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/clients'} element={<ClientsPage />} />
				</Routes>
			</Suspense>
		</div>
	);
}
