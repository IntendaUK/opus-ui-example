//Opus
import { loadApp, registerComponentTypes } from '@intenda/opus-ui';

//Custom Components
import Title from './components/title';
import Clicker from './components/clicker';
import propsClicker from './components/clicker/props';
import propsTitle from './components/title/props';

//Styles
import './main.css';

//Custom Component Registration
registerComponentTypes([{
	type: 'title',
	component: Title,
	propSpec: propsTitle
}]);

registerComponentTypes([{
	type: 'clicker',
	component: Clicker,
	propSpec: propsClicker
}]);

//Pure Opus UI Application
(async() => {
	const res = await fetch('/app.json')
	const mdaPackage = await res.json();

	loadApp({
		mdaPackage,
		config: {
			env: 'development'
		}
	});
})();
