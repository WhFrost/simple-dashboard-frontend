import cn from 'classnames';
import {Link} from 'react-router-dom';
import './ui/styles/global.scss';
import {useTheme} from './providers/ThemeProvider';
import {AppRouter} from './providers/Router';

export default function App() {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={cn('app', theme)}>
			<div>
				<Link to={'/'}>Main</Link>
				<Link to={'/clients'}>Clients</Link>
				<button onClick={toggleTheme}>{theme}</button>
			</div>
			<AppRouter />
		</div>
	);
}
