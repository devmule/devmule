import './index.css'; // общие стили
import Greet from "./screens/greet/greet";


class Application {
	constructor() {
		new Greet(document.getElementById('screen'));
	}
}

new Application();
