import './index.css'; // общие стили
import AboutScreen from "./screens/about/AboutScreen";


class Application {
	constructor() {
		new AboutScreen(document.getElementById('screen'));
	}
}

new Application();
