import './screen.css';
import THEME from "../THEME";

export default class Screen {
	constructor(container) {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('screen-wrapper');
		container.appendChild(this.wrapper);
		
		this.content = document.createElement('div');
		this.content.classList.add('screen-content');
		this.wrapper.appendChild(this.content);
		
		this.background = document.createElement('div');
		this.background.style.backgroundColor = THEME.backgroundColor;
		this.background.classList.add('screen-background');
		this.wrapper.appendChild(this.background);
	}
}
