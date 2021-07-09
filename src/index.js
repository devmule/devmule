import './index.css'; // общие стили
import Greet from "./screens/greet/greet";
import ILoveMath from "./screens/ILoveMath/ILoveMath";


class Application {
	constructor() {
		let screen = document.getElementById('screen');
		new Greet(screen);
		new ILoveMath(screen);
	}
}

new Application();
