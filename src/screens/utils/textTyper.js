import './textTyper.css';

export class TextTyper {
	constructor(element, text, timeout = 50) {
		this.element = element;
		this.text = text;
		this.timeout = timeout;
		
		let currentIndex = 0;
		let player = null;
		
		let typeLoop = () => {
			currentIndex++;
			this.element.innerHTML = this.text.substring(0, currentIndex) + '<span class="text-typer-caret" aria-hidden="true"></span>';
			if (currentIndex >= this.text.length) this.stop();
		};
		
		this.type = function () {
			this.stop();
			this.element.innerHTML = '';
			currentIndex = 0;
			player = setInterval(typeLoop, this.timeout);
		};
		
		this.stop = function () {
			if (player) {
				clearInterval(player);
				player = null;
			}
		};
	}
}
