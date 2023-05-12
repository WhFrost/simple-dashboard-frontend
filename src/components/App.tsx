import {Link, Route, Routes} from 'react-router-dom';
import '../styles/index.scss';
import MainPage from '../pages/MainPage/MainPage';
import {Suspense} from 'react';
import {TasksPageAsync} from '../pages/TasksPage/TasksPage.async';

function App() {
	return (
		<>
			<div>
				<Link to={'/'}>Главная</Link>
				<Link to={'/tasks'}>Tasks</Link>
			</div>
			<Routes>
				<Route path={'/'} element={<MainPage />} />

				<Route
					path={'/tasks'}
					element={
						<Suspense fallback={<div>Loading</div>}>
							<TasksPageAsync />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
