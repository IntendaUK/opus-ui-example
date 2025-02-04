//Opus
import { loadApp, registerComponentTypes } from '@intenda/opus-ui';

//Custom Components
import Label from './components/label';
import propsLabel from './components/label/props';
import Clicker from './components/clicker';
import propsClicker from './components/clicker/props';

//Plugins
import '@intenda/vite-plugin-opus-hot-reload/src/hotReload';

//Styles
import './main.css';

//Custom Component Registration
registerComponentTypes([{
	type: 'label',
	component: Label,
	propSpec: propsLabel
}, {
	type: 'clicker',
	component: Clicker,
	propSpec: propsClicker
}]);

//Pure Opus UI Application
(async() => {
	const res = await fetch('/app.json')
	const mdaPackage = await res.json();

	const env = import.meta.env.VITE_APP_MODE;

	loadApp({
		mdaPackage,
		config: {
			env
		}
	});
})();
