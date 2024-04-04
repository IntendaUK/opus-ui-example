//Opus
import { loadApp, registerComponentTypes } from '@intenda/opus-ui';

//Component Libraries
import '@intenda/opus-ui-components';

//Custom Components
import Clicker from './components/clicker';
import propsClicker from './components/clicker/props';

//Styles
import './main.css';

//Custom Component Registration
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
