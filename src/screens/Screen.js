import './screen.css';
import THEME from "../THEME";

export default class Screen {
	constructor(wrapper) {
		this.wrapper = wrapper;
		this.wrapper.classList.add('screen-wrapper');
		
		this.content = document.createElement('div');
		this.content.classList.add('screen-content');
		this.wrapper.appendChild(this.content);
		
		this.background = document.createElement('div');
		this.background.style.backgroundColor = THEME.backgroundColor;
		this.background.classList.add('screen-background');
		this.wrapper.appendChild(this.background);
	}
}
