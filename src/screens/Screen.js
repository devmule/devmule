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
	
	get onViewport() {
		const rect = this.content.getBoundingClientRect();
		return (
			rect.top >= 0 ||
			rect.left >= 0 ||
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
}
